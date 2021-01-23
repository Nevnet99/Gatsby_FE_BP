import React from "react"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => <div>{children}</div>

export default Layout
