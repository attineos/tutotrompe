import React, {useContext} from "react"
import { ThemeContext } from 'styled-components'

function ThemeViewer() {
  const theme = useContext(ThemeContext)

  return <p>The primary color is : {theme.colors.primary}.</p>
}

export default ThemeViewer
