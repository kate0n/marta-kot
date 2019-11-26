import React from "react"
import Header from "./header/header"

const Layout = ({ children }) => {
  return (
    <div className="outer-container">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
