import React from "react"
import PlayMusicButton from "../play-music-button/play-music-button"

const Footer = ({ socialList }) => (
  <footer className="footer">
    <ul className="footer_social-buttons">
      {socialList.map((socialItem, index) => (
        <li key={index}>
          <a
            className="social_button"
            target={"_blank"}
            rel="noopener"
            href={socialItem.url}
          >
            <img src={socialItem.image} alt={socialItem.name} />
          </a>
        </li>
      ))}
    </ul>

    <PlayMusicButton className="music-btn-main" />
  </footer>
)

export default Footer
