import styled from 'styled-components'

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeTitle};
`

export default Title
