import styled from 'styled-components'

const Button4 = styled.button`
  background-color: grey;
  color: white;
  cursor: pointer;
  
  & + & {
    background-color: black;
  }
  
  &:hover {
    background-color: yellow;
    color: black;
  }
`

export default Button4
