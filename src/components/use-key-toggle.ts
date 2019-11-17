import { useEffect, useReducer } from 'react'

export type Modifier = 'Control' | 'Meta' | 'Shift' | 'Alt'
export type Key = {
  key: string,
  modifiers: Modifier[]
}
export const key = (key: string, modifiers: Modifier[] = []) => {
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

function allRequiredModifiersPresent(toggleKey: Key, event: KeyboardEvent) {
  return toggleKey.modifiers.reduce((acc: boolean, modifier: Modifier) => acc && modifierPresent[modifier](event), true)
}

/*
 why not use useState() here, because it does not play nice with the useEffect hook
 that should only run on mount/unmount (2nd parameter []). But then current
 value of useState is never updated withing the effect function. It will only
 be updated, if I either remove the [] or add the state I'm depending on [state}.
 In booth cases the logic will be executed multiple times and not only
 on mount/unmount.
 */
export const useKeyToggle = (toggleKey: Key) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const downHandler = (event: KeyboardEvent) => {
    if (toggleKey.key !== event.key || !allRequiredModifiersPresent(toggleKey, event)) return
    dispatch('does not matter')
  }
  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [])
  return state.toggled
}
