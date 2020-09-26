import { randomTheme, ThemeHistory } from './theme-history'

const _1st = randomTheme()
const _2nd = randomTheme()
const _3rd = randomTheme()

const preRecordedThemes = () => {
  const all = [_1st, _2nd, _3rd]
  let next = 0

  return () => {
    const toReturn = all[next]
    next++
    return toReturn
  }
}

describe("ThemeHistory", () => {
  let themeHistory: ThemeHistory

  beforeEach(() => {
    themeHistory = new ThemeHistory(preRecordedThemes())
  })

  test("after creation there is a current current", () => {
    const current = themeHistory.current

    expect(current).toBe(_1st)
  });

  test("next creates new theme", () => {
    const newTheme = themeHistory.next()
    const currentTheme = themeHistory.current

    expect(newTheme).toBe(_2nd);
    expect(currentTheme).toBe(_2nd);
  });

  describe('previous', () => {
    test("returns the previous theme", () => {
      themeHistory.next()
      const previous = themeHistory.previous()
      const currentTheme = themeHistory.current

      expect(previous).toBe(_1st);
      expect(currentTheme).toBe(_1st);
    });

    test('in case there is no previous theme return the current one', () => {
      const previous = themeHistory.previous()
      const currentTheme = themeHistory.current

      expect(previous).toBe(_1st);
      expect(currentTheme).toBe(_1st);
    })
  })
});
