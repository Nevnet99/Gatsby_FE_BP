import React from "react"
import { Footer } from "../Footer/Footer"
import { Navbar } from "../Navbar/Navbar"

interface Props {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

export default Layout
