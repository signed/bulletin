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
  test("after creation there is a current current", () => {
    const themeHistory = new ThemeHistory(preRecordedThemes());
    const current = themeHistory.current

    expect(current).toBe(_1st)
  });

  test("next creates new theme", () => {
    const themeHistory = new ThemeHistory(preRecordedThemes());
    const newTheme = themeHistory.next()
    const currentTheme = themeHistory.current

    expect(newTheme).toBe(_2nd);
    expect(currentTheme).toBe(_2nd);
  });
});
