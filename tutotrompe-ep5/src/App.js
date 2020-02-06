import React from 'react'
import { ThemeProvider } from 'styled-components'

import Button1 from './components/Button1'
import Button2 from './components/Button2'
import { PrimaryButton3, SecondaryButton3 } from './components/Button3'
import { PrimaryButton3Bis, SecondaryButton3Bis } from './components/Button3Bis'
import Button4 from './components/Button4'
import { Button5, Button5Text } from './components/Button5'
import ButtonWithTheme from './components/ButtonWithTheme'
import { CustomContent, CustomLink, Text2 } from './components/CustomContent'
import Text from './components/Text'
import ThemeViewer from './components/ThemeViewer'

const theme = {
  colors: {
    primary: 'lightblue'
  },
  spaces: {
    s0: '8px'
  }
}

function App() {
  return (
    <>
      <Text>Hello world</Text>
      <Text id="text-id">I have an ID</Text>
      <hr />
      <Button1 disabled={true}>Disabled button</Button1>
      <Button1>Normal button</Button1>
      <hr />
      <Button2 disabled={true}>Disabled button</Button2>
      <Button2>Normal button</Button2>
      <hr />
      <PrimaryButton3>Primary</PrimaryButton3>
      <SecondaryButton3>Secondary</SecondaryButton3>
      <hr />
      <PrimaryButton3Bis>Primary bis</PrimaryButton3Bis>
      <SecondaryButton3Bis>Secondary bis</SecondaryButton3Bis>
      <hr />
      <Button4>Grey background</Button4>
      <Button4>Black background</Button4>
      <hr />
      <Text2>I'm out of the CustomContent component.</Text2>
      <CustomContent><Text2>I'm inside the CustomContent component.</Text2></CustomContent>
      <Text2>I contain a <CustomLink href="https://www.attineos.com">link</CustomLink>.</Text2>
      <hr />
      <ThemeProvider theme={theme}>
        <ButtonWithTheme>I love themes</ButtonWithTheme>
      </ThemeProvider>
      <hr />
      <ThemeProvider theme={theme}>
        <ThemeViewer />
      </ThemeProvider>
      <hr />
      <Button5Text>Out of the button</Button5Text>
      <Button5><Button5Text>In a button</Button5Text></Button5>
    </>
  )
}

export default App
