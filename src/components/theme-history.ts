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
  private readonly _entries: Theme[] = []
  private index: number = 0

  constructor(
    private readonly themeSource: ThemeSource,
    private readonly size: number) {
    this._entries.push(this.themeSource())
  }

  get entries(): Theme[] {
    return [...this._entries]
  }

  get current(): Theme {
    return this._entries[this.index]
  }

  next(): Theme {
    const latestThemeSelected = this.index === this._entries.length - 1
    if (!latestThemeSelected) {
      this.index++
      return this.current
    }
    const isAtCapacity = this.entries.length === this.size
    if (isAtCapacity) {
      this._entries.shift()
      this.index--
    }

    const nextColors = this.themeSource()
    this._entries.push(nextColors)
    this.index++

    return this.current
  }

  previous(): Theme {
    this.index = Math.max(0, this.index - 1)
    return this.current
  }
}

