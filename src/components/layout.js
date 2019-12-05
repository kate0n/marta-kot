import React from "react"
import Loadable from "@loadable/component"
import Head from "../components/head/head"
import MobileHeader from "../components/header/MobileHeader"

import Header from "./header/header"
import { isBrowser } from "../pages"
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary"

const ResponsiveImageBackground = Loadable(() =>
  import("./ResponsiveImageBackground/ResponsiveImageBackground")
)

const Layout = ({ children, bg, isVisibleConcert }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  React.useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("—vh", `${vh}px`)
    console.log("first vh", vh)
    isBrowser() &&
      window.addEventListener("resize", () => {
        let vh = window.innerHeight * 0.01
        console.log("resize vh", vh)
        document.documentElement.style.setProperty("--vh", `${vh}px`)
      })
  }, [])

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
        <ErrorBoundary>
          {isBrowser() && <ResponsiveImageBackground bg={bg} />}
        </ErrorBoundary>

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
