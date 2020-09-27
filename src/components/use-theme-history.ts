import { randomTheme, ThemeHistory } from '../components/theme-history'
import { useRef, useState } from 'react'

export const useThemeHistory = (size: number) => {
  const [_, render] = useState<boolean>(true)
  const themeHistoryRef = useRef(new ThemeHistory(randomTheme, size))
  const themeHistory = themeHistoryRef.current

  const theme = themeHistory.current
  const entries = themeHistory.entries
  const next = () => {
    themeHistory.next()
    render((curr) => !curr)
  }
  const previous = () => {
    themeHistory.previous()
    render((curr) => !curr)
  }

  return {
    theme,
    entries,
    next,
    previous,
  }
}
