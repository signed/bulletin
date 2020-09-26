import { BoxProps, CSSReset, Flex, Input, Text, ThemeProvider } from '@chakra-ui/core'
import { randomColors } from 'components/theme-history'
import * as React from 'react'
import { ChangeEvent, KeyboardEvent, MouseEvent, useEffect, useState } from 'react'

const IndexPage = () => {
  let initialText = new Date().toISOString()
  const [text, setText] = useState(initialText)
  const [inputMode, setInputMode] = useState(false)
  const [colors, setColors] = useState(randomColors())

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
    color: colors.text,
    background: colors.background,
    textAlign: 'center',
  }

  const roleNewColors = (event: MouseEvent) => {
    if (event.target !== body.current) {
      return
    }
    setColors(() => randomColors())
  }

  useEffect(() => {
    let listener = (e: globalThis.KeyboardEvent) => {
      if (!e.altKey) {
        return
      }
      if (e.key === 'ArrowRight') {
        setColors(() => randomColors())
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
    <ThemeProvider>
      <CSSReset/>
      <Flex direction={'column'} justify={'center'} alignItems={'center'} height={'100vh'}
            background={colors.background}
            onClick={roleNewColors}
            ref={body}
      >
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
    </ThemeProvider>
  )
}

export default IndexPage
