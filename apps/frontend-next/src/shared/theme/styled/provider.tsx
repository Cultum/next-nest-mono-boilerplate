import * as React from "react"
import { ThemeProvider } from "styled-components"

import { theme } from "./theme"

const ProvideStyledTheme: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export { ProvideStyledTheme }
