import randomColor from 'randomcolor'

export type Color = string

export interface Theme {
  text: Color
  background: Color
}

export const randomColors = (): Theme => {
  return {
    text: randomColor(),
    background: randomColor(),
  }
}

export class ThemeHistory {
  private readonly history: Theme[] = []
  private index: number = 0

  constructor() {
    this.history.push(randomColors())
  }

  get currentColor(): Theme {
    return this.history[this.index]
  }

  next(): Theme {
    const nextColors = randomColors()
    this.history.push(nextColors)
    this.index ++
    return nextColors
  }
}

