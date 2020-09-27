import { Color, Theme, ThemeHistory } from './theme-history'

const staticTheme = (color: Color): Theme => {
  return {
    background: color,
    text: color,
  }
}

const _1st = staticTheme('1st')
const _2nd = staticTheme('2nd')
const _3rd = staticTheme('3rd')

const preRecordedThemes = () => {
  const all = [_1st, _2nd, _3rd]
  let next = 0

  return () => {
    const toReturn = all[next]
    next++
    return toReturn
  }
}

describe('ThemeHistory', () => {
  let themeHistory: ThemeHistory

  beforeEach(() => {
    themeHistory = new ThemeHistory(preRecordedThemes(), 10)
  })

  test('after creation there is a current current', () => {
    const current = themeHistory.current

    expect(current).toBe(_1st)
  })

  describe('next', () => {
    test('creates new theme if current theme is the latest in the entries', () => {
      const newTheme = themeHistory.next()
      const currentTheme = themeHistory.current

      expect(newTheme).toBe(_2nd)
      expect(currentTheme).toBe(_2nd)
    })

    test('move one towards the end of the entries list if current theme is not the latest in the entries ', () => {
      themeHistory.next()
      themeHistory.previous()
      themeHistory.next()

      expect(themeHistory.entries).toHaveLength(2)
      expect(themeHistory.current).toBe(_2nd)
    })
  })

  describe('previous', () => {
    test('returns the previous theme', () => {
      themeHistory.next()
      const previous = themeHistory.previous()
      const currentTheme = themeHistory.current

      expect(previous).toBe(_1st)
      expect(currentTheme).toBe(_1st)
    })

    test('in case there is no previous theme return the current one', () => {
      const previous = themeHistory.previous()
      const currentTheme = themeHistory.current

      expect(previous).toBe(_1st)
      expect(currentTheme).toBe(_1st)
    })
  })

  describe('entries', () => {
    test('only remember the number of themes specified', () => {
      const themeHistory = new ThemeHistory(preRecordedThemes(), 2)
      expect(themeHistory.entries).toStrictEqual([_1st])
      themeHistory.next()
      themeHistory.next()
      expect(themeHistory.entries).toStrictEqual([_2nd, _3rd])
    })
  })
})
