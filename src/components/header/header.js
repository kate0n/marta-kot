import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"

const menuItems = [
  { name: "Концерты", link: "/concert" },
  { name: "Видео", link: "/video" },
  { name: "Музыка", link: "/music" },
  { name: "Контакты", link: "/contacts" },
]

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const togglMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div
      className="header_container"
      style={{ backgroundImage: 'url("../../static/images/main.png")' }}
    >
      <header className="header">
        <Link to="/" className="header_logo">
          <img src={logo} alt="logo" className="header_logo-img" />
        </Link>
        <nav>
          <ul className="header_menu">
            {menuItems.map((menuItem, index) => (
              <li className="header_menu_item">
                <Link to={menuItem.link} key={index}>
                  {menuItem.name}
                </Link>
              </li>
            ))}
          </ul>

          <div
            onClick={togglMobileMenu}
            className={
              isMobileMenuOpen
                ? "mobile-menu mobile-menu-active"
                : "mobile-menu"
            }
          >
            <span></span>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
