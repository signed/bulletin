import { useForceRender } from '../components/use-force-render'
import { useRef } from 'react'
import { randomTheme, ThemeHistory } from '../components/theme-history'

export const useThemeHistory = (size: number) => {
  const {forceRender} = useForceRender()
  const themeHistoryRef = useRef(new ThemeHistory(randomTheme, size))
  const themeHistory = themeHistoryRef.current

  const theme = themeHistory.current
  const entries = themeHistory.entries
  const next = () => {
    themeHistory.next()
    forceRender()
  }
  const previous = () => {
    themeHistory.previous()
    forceRender()
  }

  return {
    theme,
    entries,
    next,
    previous,
  }
}
