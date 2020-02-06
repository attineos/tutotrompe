import styled from "styled-components"

const ButtonWithTheme = styled.button`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spaces.s0};
`

export default ButtonWithTheme
