import React from "react"
import Loadable from "@loadable/component"
import Head from "../components/head/head"
import MobileHeader from "../components/header/MobileHeader"

import Header from "./header/header"
import { isBrowser } from "../pages"
const ResponsiveImageBackground = Loadable(() =>
  import("./ResponsiveImageBackground/ResponsiveImageBackground")
)

const Layout = ({ children, bg, isVisibleConcert }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <Head />
      <MobileHeader
        isVisibleConcert={isVisibleConcert}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <div
        className={
          isMobileMenuOpen ? "app-wrapper app-wrapper--hidden" : "app-wrapper"
        }
      >
        {isBrowser && <ResponsiveImageBackground bg={bg} />}

        <div className="outer-container">
          <Header
            isVisibleConcert={isVisibleConcert}
            toggleMobileMenu={toggleMobileMenu}
          />
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
