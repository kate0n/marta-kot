import React from "react"
import PlayMusicButton from "../play-music-button/play-music-button"
import IconShare from "../../images/share.svg"
import SocialButton from "../SocialButton/SocialButton"

const PageFooter = ({ socialList }) => (
  <footer className="page-footer">
    <div className="page-footer_share-container">
      <ul className="page-footer_social-buttons">
        {socialList.map((socialItem, index) => (
          <li key={index}>
            <SocialButton {...socialItem} />
          </li>
        ))}
      </ul>
      <img className="page-footer_share" src={IconShare} alt="share" />
    </div>
    <PlayMusicButton />
  </footer>
)

export default PageFooter
