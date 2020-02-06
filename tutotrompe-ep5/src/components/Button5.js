import React from "react"
import styled from "styled-components"

function Text(props) {
  return <p className={props.className}>{props.children}</p>
}

export const Button5Text = styled(Text)`
  text-decoration: underline;
`

export const Button5 = styled.button`
 ${Button5Text} {
  color: red;
 }
`
