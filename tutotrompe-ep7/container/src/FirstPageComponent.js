import React from 'react'

function FirstPageComponent() {
  return (
    <div style={{ background: 'pink', border: '3px solid red', margin: 12 }}>
      <p>I'm an injected component</p>
      <p>Coming from the container</p>
    </div>
  )
}

export default FirstPageComponent
