// src/styles/styled.d.ts
import 'styled-components'
import { theme } from './theme'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    // Add a placeholder property to avoid the eslint error
    _placeholder?: never
  }
}
