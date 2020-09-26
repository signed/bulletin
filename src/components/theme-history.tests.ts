import { ThemeHistory } from "./theme-history";

describe("ThemeHistory", () => {
  test("after creation there is a current color", () => {
    const themeHistory = new ThemeHistory();
    const currentColor = themeHistory.currentColor
    expect(currentColor.background).toBeDefined();
    expect(currentColor.text).toBeDefined();
  });

  test("next creates new random colors", () => {
    const themeHistory = new ThemeHistory();
    const newTheme = themeHistory.next()
    const currentTheme = themeHistory.currentColor

    expect(newTheme.background).toEqual(currentTheme.background);
    expect(newTheme.text).toEqual(currentTheme.text);
  });
});
