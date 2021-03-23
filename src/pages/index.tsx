import { BoxProps, CSSReset, Flex, Input, Text, ChakraProvider } from '@chakra-ui/react'
import { Key } from '../components/key'
import * as React from 'react'
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { useThemeHistory } from '../components/use-theme-history'

const IndexPage = () => {
  let initialText = new Date().toISOString()
  const [text, setText] = useState(initialText)
  const [inputMode, setInputMode] = useState(false)
  const { theme, next, previous } = useThemeHistory(5)

  const textInput = React.createRef<HTMLInputElement>()
  const body = React.createRef<HTMLDivElement>()

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      setInputMode(false)
    }
  }

  const handleClickOnText = (): void => {
    setInputMode(true)
    let inputElement = textInput.current!
    setTimeout(() => {
      // TODO: is there another way to give focus to revealed input field
      inputElement.focus()
      inputElement.select()
    })
  }

  const handleBlurOnTextInput = () => {
    setInputMode(false)
  }

  const sharedStyles: Pick<BoxProps, 'fontSize' | 'fontWeight' | 'color' | 'textAlign' | 'background'> = {
    fontSize: '5xl',
    fontWeight: 'black',
    color: theme.text,
    background: theme.background,
    textAlign: 'center',
  }

  useEffect(() => {
    let listener = (e: globalThis.KeyboardEvent) => {
      if (!e.altKey) {
        return
      }
      if (e.key === 'ArrowLeft') {
        previous()
      }
      if (e.key === 'ArrowRight') {
        next()
      }
    }
    window.addEventListener('keyup', listener)

    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [])

  const inputDisplay = inputMode ? 'unset' : 'none'
  const textDisplay = inputMode ? 'none' : 'unset'

  return (
    <ChakraProvider>
      <CSSReset />
      <Flex direction={'column'}
            justify={'center'}
            alignItems={'center'}
            height={'100vh'}
            background={theme.background}
            ref={body}
      >
        <Flex as={'div'}
              position={'absolute'}
              bottom={'5px'}
              left={'5px'}
        >
          <Key>&#8592;</Key>
          <Key>alt</Key>
          <Key>&#8594;</Key>
        </Flex>
        <Input display={inputDisplay}
               onKeyDown={handleInputKeyDown}
               {...sharedStyles} placeholder="Type here..."
               value={text}
               onChange={(event: ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
               onBlur={handleBlurOnTextInput}
               focusBorderColor={'transparent'}
               ref={textInput}
        />
        <Text display={textDisplay}
              as={'span'}
              onClick={handleClickOnText}
              {...sharedStyles}>
          {text}
        </Text>
      </Flex>
    </ChakraProvider>
  )
}

export default IndexPage
