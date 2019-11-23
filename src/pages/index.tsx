import { BoxProps, CSSReset, Flex, Input, Text, ThemeProvider } from '@chakra-ui/core'
import * as React from 'react'
import { ChangeEvent, KeyboardEvent, useState } from 'react'

const IndexPage = () => {
  let initialText = new Date().toISOString()
  const [text, setText] = useState(initialText)
  const [inputMode, setInputMode] = useState(false)
  const textInput = React.createRef<HTMLInputElement>()

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      setInputMode(false)
    }
  }
  const handleClickOnText = (): void => {
    setInputMode(true)
    let inputElement = textInput.current!
    setTimeout(()=> {
      // TODO: is there another way to give focus to revealed input field
      inputElement.focus()
      inputElement.select()
    })
  }

  const handleBlur = () => {
    setInputMode(false)
  }

  const sharedStyles: Pick<BoxProps, 'fontSize' | 'fontWeight' | 'color' | 'textAlign'> = {
    fontSize: '5xl', 
    fontWeight: 'black',
    color: 'blueviolet',
    textAlign: 'center',
  }

  const inputDisplay = inputMode ? 'unset' : 'none'
  const textDisplay = inputMode ? 'none' : 'unset'

  return (
    <ThemeProvider>
      <CSSReset/>
      <Flex direction={'column'} justify={'center'} alignItems={'center'} height={'100vh'}>
        <Input display={inputDisplay  }
               onKeyDown={handleInputKeyDown}
               {...sharedStyles} placeholder="Type here..."
               value={text}
               onChange={(event: ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
               onBlur={handleBlur}
               ref={textInput}
        />
        <Text display={textDisplay}
              as={'span'}
              onClick={handleClickOnText}
              {...sharedStyles}>
          {text}
        </Text>
        <Text as={'span'}>
          {text}
        </Text>
      </Flex>
    </ThemeProvider>
  )
}

export default IndexPage
