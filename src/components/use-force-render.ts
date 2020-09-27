import { useState } from 'react'

export const useForceRender = () => {
  const [_, render] = useState<boolean>(true)
  const forceRender = () => render((curr) => !curr)
  return { forceRender }
}
