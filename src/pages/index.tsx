import { Box, CSSReset, Text, ThemeProvider } from '@chakra-ui/core'
import * as React from 'react'
import { useEffect, useReducer } from 'react'

type Modifier = 'Control' | 'Meta' | 'Shift' | 'Alt'

type Key = {
  key: string,
  modifiers: Modifier[]
}

const key = (key: string, modifiers: Modifier[] = []) => {
  return {
    key, modifiers,
  }
}

const modifierPresent = {
  'Control': (event: KeyboardEvent) => event.ctrlKey,
  'Meta': (event: KeyboardEvent) => event.metaKey,
  'Shift': (event: KeyboardEvent) => event.shiftKey,
  'Alt': (event: KeyboardEvent) => event.altKey,
}


type State = {
  toggled: boolean
}
const initialState: State = {
  toggled: false,
}

const reducer = (previousState: State): State => ({ toggled: !previousState.toggled })

/*
 why not use useState() here, because it does not play nice with the useEffect hook
 that should only run on mount/unmount (2nd parameter []). But then current
 value of useState is never updated withing the effect function. It will only
 be updated, if I either remove the [] or add the state I'm depending on [state}.
 In booth cases the logic will be executed multiple times and not only
 on mount/unmount.
 */
const useKeyToggle = (toggleKey: Key) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const downHandler = (event: KeyboardEvent) => {
    const { key, altKey, shiftKey, metaKey, ctrlKey } = event
    console.log([
      `key     : ${key}`,
      `alt     : ${altKey}`,
      `meta    : ${metaKey}`,
      `ctrlKey : ${ctrlKey}`,
      `shiftKey: ${shiftKey}`
    ].join('\n'))
    if (toggleKey.key !== key) {
      return
    }
    let allRequestedModifiersPresent = toggleKey.modifiers.reduce((acc: boolean, modifier: Modifier) => acc && modifierPresent[modifier](event), true)
    if (allRequestedModifiersPresent) {
      dispatch('does not matter')
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
  let pressed = useKeyToggle(key('Escape', ['Alt', 'Control']))
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
