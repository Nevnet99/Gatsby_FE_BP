import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../../styles/global"
import { theme } from "../../../styles/theme"
import { Footer } from "../Footer/Footer"
import { Navbar } from "../Navbar/Navbar"

interface Props {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />)
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
