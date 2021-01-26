import React, { FC } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../../styles/global"
import { theme } from "../../../styles/theme"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Layout: FC = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar spacer={true} />
      {children}
      <Footer />
    </ThemeProvider>
  </>
)

export default Layout
