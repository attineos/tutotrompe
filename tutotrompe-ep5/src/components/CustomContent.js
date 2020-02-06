import styled from 'styled-components'

export const Text2 = styled.p`
  color: grey;
  font-size: 20px;
`

export const CustomLink = styled.a`
  ${Text2}:hover & {
    color: red;
  }
`

export const CustomContent = styled.div`
  padding: 0 16px;
  border: 1px solid lightskyblue;
  
  ${Text2} {
    color: lightsalmon;
  }
`
