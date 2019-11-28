import React from 'react'

import Counter from './Counter'
import CounterES6 from './CounterES6'
import Form from './Form'

function App() {
  return (
    <>
      <CounterES6 />
      <hr />
      <Form />
      <hr />
      <Counter />
    </>
  )
}

export default App
