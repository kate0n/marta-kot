import React from "react"
import Header from "./header/header"
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image"
const Layout = ({ children, bg }) => {
  return (
    <div className="app-wrapper">
      <ResponsiveImage>
        <ResponsiveImageSize default minWidth={0} path={bg.xs} />
        <ResponsiveImageSize minWidth={1024} path={bg.sm} />
        <ResponsiveImageSize minWidth={1440} path={bg.md} />
        <ResponsiveImageSize minWidth={1600} path={bg.lg} />
      </ResponsiveImage>

      <div className="outer-container">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
