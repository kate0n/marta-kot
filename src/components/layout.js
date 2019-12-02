import React from "react"
import Header from "./header/header"
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
const Layout = ({ children, bg, isMain }) => {
  return (
    <div
      className="app-wrapper"
    >
      <ResponsiveImage>
        <ResponsiveImageSize
          default
          minWidth={0}
          path={'/images/homepage-bg-768.jpg'}
        />
        <ResponsiveImageSize
          minWidth={1024}
          path={'/images/homepage-bg-1024.jpg'}
        />
        <ResponsiveImageSize
          minWidth={1440}
          path={'/images/homepage-bg-1440.jpg'}
        />
        <ResponsiveImageSize
          minWidth={1600}
          path={'/images/homepage-bg-fullsize.jpg'}
        />
      </ResponsiveImage>

      <div className="outer-container">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
