import React, { useState } from 'react'
import hookIntoProps from 'hook-into-props'

const useCounter = () => {
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)

  return [counter, increment, decrement]
}

class CounterES6 extends React.Component {
  /* Code that will not be refactor to a functional component. */

  render() {
    const { counter, increment, decrement } = this.props

    return (
      <>
        <p>This counter is a class component but uses hooks.</p>
        <p>{counter}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </>
    )
  }
}

const useHooks = () => {
  const [counter, increment, decrement] = useCounter()

  return { counter, increment, decrement }
}

export default hookIntoProps(useHooks)(CounterES6)
