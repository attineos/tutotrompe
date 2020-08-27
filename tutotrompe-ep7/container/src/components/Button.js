import styled from 'styled-components'

const Button = styled.button`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSize};
`

export default Button
