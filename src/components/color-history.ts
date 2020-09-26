import { Colors } from 'components/colors'
import randomColor from 'randomcolor'

export const randomColors = (): Colors => {
  return {
    text: randomColor(),
    background: randomColor(),
  }
}

export class ColorHistory {
  private readonly history: Colors[] = []
  private index: number = 0

  constructor() {
    this.history.push(randomColors())
  }

  get currentColor(): Colors {
    return this.history[this.index]
  }

  next(): Colors {
    const nextColors = randomColors()
    this.history.push(nextColors)
    this.index ++
    return nextColors
  }
}

