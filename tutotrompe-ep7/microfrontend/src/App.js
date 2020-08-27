import React, { useState } from 'react'

import Button from './components/Button'
import Label from './components/Label'

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [components, setComponents] = useState({})

  global.setComponentsMfeTutotrompe = (components) => setComponents(components)

  if (!isLogged) {
    // Render log in form.
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Label htmlFor="login">Login</Label>
        <input id="login" />

        <Label htmlFor="password" style={{ marginTop: 8 }}>
          Password
        </Label>
        <input id="password" type="password" />

        <Button onClick={() => setIsLogged(true)} style={{ marginTop: 16 }}>
          Sign in
        </Button>
      </div>
    )
  }

  return (
    <div>
      {/* Render the welcome text. */}
      {components.firstPageComponent}
      {/* Render the log out button. */}
      <Button onClick={() => setIsLogged(false)}>Sign out</Button>
    </div>
  )
}

export default App
