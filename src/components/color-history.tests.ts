import { ColorHistory } from "./color-history";

describe("ColorHistory", () => {
  test("after creation there is a current color", () => {
    const colorHistory = new ColorHistory();
    const currentColor = colorHistory.currentColor
    expect(currentColor.background).toBeDefined();
    expect(currentColor.text).toBeDefined();
  });

  test("next creates new random colors", () => {
    const colorHistory = new ColorHistory();
    const newColor = colorHistory.next()
    const currentColor = colorHistory.currentColor

    expect(newColor.background).toEqual(currentColor.background);
    expect(newColor.text).toEqual(currentColor.text);
  });
});
