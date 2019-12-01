import React from "react"
import Header from "./header/header"

const Layout = ({ children, bg, isMain }) => {
  return (
    <div
      className="app-wrapper"
      style={{ backgroundImage: `url("${bg}")`, height: `${isMain && "100%"}` }}
    >
      <div className="outer-container">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
