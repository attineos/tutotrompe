import React from 'react'
import { useFormState } from 'react-use-form-state'

function Form() {
  const [{ errors, validity, values }, { label, number, text }] = useFormState(
    { price: 10 },
    { withIds: true },
  )
  const handleSubmit = () => {
    if (!Object.keys(errors).length) {
      alert(`${values.product} costs ${values.price} units !`)
    }
  }

  return (
    <>
      <p>This form is using react-use-form-state. </p>
      <form onSubmit={handleSubmit}>
        <label {...label('product')}>Product: </label>
        <input {...text('product')} required />
        <br />
        <label {...label('price')}>Price: </label>
        <input
          {...number({
            name: 'price',
            validate: value => {
              if (value < 10 || value === '13') {
                return 'Price should be at least 10 units and not 13 units.'
              }
            },
          })}
        />
        {validity.price === false && <p style={{ color: 'red' }}>{errors.price}</p>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Form
