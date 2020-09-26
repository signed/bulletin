import randomColor from 'randomcolor'

export type Color = string

export interface Theme {
  text: Color
  background: Color
}

export const randomTheme = (): Theme => {
  return {
    text: randomColor(),
    background: randomColor(),
  }
}

export type ThemeSource = () => Theme

export class ThemeHistory {
  private readonly history: Theme[] = []
  private index: number = 0

  constructor(private readonly themeSource: ThemeSource) {
    this.history.push(this.themeSource())
  }

  get current(): Theme {
    return this.history[this.index]
  }

  next(): Theme {
    const nextColors = this.themeSource()
    this.history.push(nextColors)
    this.index ++
    return nextColors
  }
}

