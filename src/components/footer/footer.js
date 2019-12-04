import React from "react"
import PlayMusicButton from "../play-music-button/play-music-button"
import SocialButton from "../SocialButton/SocialButton"

const Footer = ({ socialList, mainBanner }) => (
  <footer className={mainBanner.visibly ? "footer" : "footer no-banner"}>
    <ul className="footer_social-buttons">
      {
        socialList.map((socialItem, index) => (
          <li key={index}>
            <SocialButton
              {...socialItem}
            />
          </li>
        ))
      }
    </ul>

    <PlayMusicButton className="music-btn-main"/>
  </footer>
)

export default Footer
