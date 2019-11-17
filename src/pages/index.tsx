import * as React from 'react'
import { Box, CSSReset, Text, ThemeProvider } from '@chakra-ui/core'
import { useKeyToggle, key } from 'src/components/use-key-toggle'

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
