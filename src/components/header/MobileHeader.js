import React from "react"
import PlayMusicButton from "../play-music-button/play-music-button"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"

let menuItems = [
  { name: "Концерты", link: "/concert" },
  { name: "Видео", link: "/video" },
  { name: "Музыка", link: "/music" },
  { name: "Контакты", link: "/contacts" },
]

const MobileHeader = ({
                        isVisibleConcert,
                        isMobileMenuOpen,
                        toggleMobileMenu,
                      }) => {
  menuItems = menuItems.filter(item => {
    if (item.name === "Концерты" && !isVisibleConcert) {
      return false
    }
    return true
  })
  return (
    <div
      className={
        isMobileMenuOpen
          ? "mobile_container mobile_container-open"
          : "mobile_container"
      }
    >
      <header className="header header_mobile">
        <div className="header_top header_top-mobile">
          <Link to="/" className="header_logo">
            <img src={logo} alt="logo" className="header_logo-img"/>
          </Link>
          {/* бургер */}
          <div
            onClick={toggleMobileMenu}
            className="mobile-menu_burger mobile-menu_burger--open"
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
                <Link aria-label="menu link" to={menuItem.link} onClick={toggleMobileMenu}>
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
  )
}

export default MobileHeader
