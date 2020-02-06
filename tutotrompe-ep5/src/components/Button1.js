import styled from 'styled-components'

function customStyle(props) {
  return `
    background-color: ${props.disabled ? 'red' : 'green'};
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
  `
}

const Button1 = styled.button`
  color: white;
  
  ${customStyle};
`

export default Button1
