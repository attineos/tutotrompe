import styled from 'styled-components'

const Button2 = styled.button.attrs(props => {
  return {
    backgroundColor: props.disabled ? 'red' : 'green',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
  }
})`
  color: white;
  
  background-color: ${props => props.backgroundColor};
  cursor: ${props => props.cursor};
`

export default Button2
