import React, { useState } from "react"
import { Location } from "@reach/router"
import { Link } from "gatsby"
import PlayMusicButton from "../../components/play-music-button/play-music-button"
import logo from "../../images/logo.svg"

const menuItems = [
  { name: "Концерты", link: "/concert" },
  { name: "Видео", link: "/video" },
  { name: "Музыка", link: "/music" },
  { name: "Контакты", link: "/contacts" },
]

const Header = props => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const togglMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <Location>
      {({ location }) => (
        <div className={isMobileMenuOpen ? "mobile_container" : ""}>
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
              {/* бургер */}
              <div
                onClick={togglMobileMenu}
                className={
                  isMobileMenuOpen
                    ? "mobile-menu_burger mobile-menu_burger--open"
                    : "mobile-menu_burger"
                }
              >
                <span></span>
              </div>
            </div>
          </header>
          {/* mobile nav */}
          <div
            className={
              isMobileMenuOpen ? "mobile-menu mobile-menu--open" : "mobile-menu"
            }
          >
            <nav className="mobile-menu_nav">
              <ul>
                {menuItems.map((menuItem, index) => (
                  <li className="header_menu-item" key={index}>
                    <Link to={menuItem.link} onClick={togglMobileMenu}>
                      {menuItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <PlayMusicButton
              className={isMobileMenuOpen ? "music-btn--mobile" : ""}
            />
          </div>
        </div>
      )}
    </Location>
  )
}

export default Header
