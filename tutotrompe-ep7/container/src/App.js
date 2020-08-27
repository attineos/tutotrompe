import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled, * as styledMethods from 'styled-components'
import { ThemeProvider } from 'styled-components'

import FirstPageComponent from './FirstPageComponent'
import MFELauncher from './MFELauncher'

import Button from './components/Button'
import Title from './components/Title'

const configMFE = {
  manifestPath: 'manifest.json',
  mfePath: 'https://localhost:8001/', // Change it to the URL of your MFE.
  name: 'MfeTutotrompe',
  scriptName: 'main.js',
}

const dependencies = {
  'styled-components': { mainFunction: styled, ...styledMethods },
  react: React,
  'react-dom': ReactDOM,
}

const theme = {
  font: 'Arial',
  fontSize: '16px',
  fontSizeTitle: '32px',
}

const bondTheme = {
  font: 'goldenEye',
  fontSize: '24px',
  fontSizeTitle: '40px',
}

function App() {
  const [currentTheme, setCurrentTheme] = useState(theme)

  const switchTheme = () => {
    if (currentTheme === theme) {
      setCurrentTheme(bondTheme)
    } else {
      setCurrentTheme(theme)
    }
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title>Tutotrompe {currentTheme === bondTheme ? '*' : ''}007</Title>
          <div>
            <Button onClick={switchTheme}>Switch theme</Button>
          </div>
        </div>
        <div
          style={{
            border: '1px solid black',
            display: 'flex',
            padding: '16px 24px',
            justifyContent: 'center',
          }}
        >
          <MFELauncher
            components={{
              firstPageComponent: <FirstPageComponent />,
            }}
            configMFE={configMFE}
            dependencies={dependencies}
          />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
