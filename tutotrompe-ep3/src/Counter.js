import React from 'react'
import { useFormState } from 'react-use-form-state'

function Counter({ onChange, value }) {
  return (
    <>
      <button onClick={() => onChange(value + 1)}>+</button>
      <button onClick={() => onChange(value - 1)}>-</button>
    </>
  )
}

const INITIAL_COUNTER = 10

export default () => {
  const [{ errors, setField, validity, values }, { raw }] = useFormState({
    counter: INITIAL_COUNTER,
  })

  const validateCounter = value => {
    if (value < 5) {
      return 'The counter must be greater than 5.'
    }
  }

  return (
    <>
      <p>This counter is using react-use-form-state.</p>
      <Counter
        {...raw({
          name: 'counter',
          validate: validateCounter,
        })}
      />
      <button onClick={() => setField('counter', INITIAL_COUNTER)}>Reset</button>
      <p>{values.counter}</p>
      {validity.counter === false && <p style={{ color: 'red' }}>{errors.counter}</p>}
    </>
  )
}
