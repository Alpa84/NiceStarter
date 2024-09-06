// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fonts.main};
  }
`
