import { Box, CSSReset, Text, ThemeProvider } from '@chakra-ui/core'
import * as React from 'react'
import { useEffect, useReducer } from 'react'

type TheState = { toggled: boolean }
const initialState: TheState = { toggled: false }

const reducer = (state: TheState) => {
  return { toggled: !state.toggled }
}

/*
 why not use useState() here, because it does not play nice with the useEffect hook
 that should only run on mount/unmount (2nd parameter []). But then current
 value of useState is never updated withing the effect function. It will only
 be updated, if I either remove the [] or add the state I'm depending on [state}.
 In booth cases the logic will be executed multiple times and not only
 on mount/unmount.
 */
const useKeyToggle = (targetKey: string) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const downHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      dispatch('not important')
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [])
  return state.toggled
}

const IndexPage = () => {
  let pressed = useKeyToggle('Escape')

  return (
    <ThemeProvider>
      <CSSReset/>
      <Box p={8}>
        <Text fontSize="xl">Hello World pressed: {pressed ? 'true' : 'false'} {new Date().toISOString()}</Text>
      </Box>
    </ThemeProvider>
  )
}

export default IndexPage
