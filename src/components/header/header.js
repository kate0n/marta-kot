import React, { useState } from "react"
import { Location } from "@reach/router"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"

let menuItems = [
  { name: "Концерты", link: "/concert" },
  { name: "Видео", link: "/video" },
  { name: "Музыка", link: "/music" },
  { name: "Контакты", link: "/contacts" },
]

const Header = ({ isVisibleConcert, toggleMobileMenu }) => {
  menuItems = menuItems.filter(item => {
    if (item.name === "Концерты" && !isVisibleConcert) {
      return false
    }
    return true
  })

  return (
    <Location>
      {({ location }) => (
        <>
          {/*- mobile header */}
          <div className="header_top header_top-mobile">
            <Link to="/" className="header_logo">
              <img src={logo} alt="logo" className="header_logo-img" />
            </Link>
            <div onClick={toggleMobileMenu} className="mobile-menu_burger">
              <span></span>
            </div>
          </div>
          {/* desktop header */}
          <header className="header">
            <div className="header_top">
              <Link to="/" className="header_logo">
                <img src={logo} alt="logo" className="header_logo-img" />
              </Link>
              <nav className="header_menu">
                <ul>
                  {menuItems.map((menuItem, index) => (
                    <li
                      className={
                        location.pathname === menuItem.link
                          ? "header_menu-item header_menu-item--active links"
                          : "header_menu-item links"
                      }
                      key={index}
                    >
                      <Link to={menuItem.link}>{menuItem.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </header>
        </>
      )}
    </Location>
  )
}

export default Header
