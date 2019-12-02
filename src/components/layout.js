import React from "react"
import Loadable from "@loadable/component"

import Header from "./header/header"
import { isBrowser } from "../pages"
const ResponsiveImageBackground = Loadable(() =>
  import("./ResponsiveImageBackground/ResponsiveImageBackground")
)

const Layout = ({ children, bg }) => {
  return (
    <div className="app-wrapper">
      {isBrowser && <ResponsiveImageBackground bg={bg} />}

      <div className="outer-container">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
