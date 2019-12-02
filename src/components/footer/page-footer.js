import React from "react"
import PlayMusicButton from "../play-music-button/play-music-button"
import IconShare from "../../images/share.svg"

const PageFooter = ({ socialList }) => (
  <footer className="page-footer">
    <div className="page-footer_share-container">
      {/* <img className="page-footer_share" src={IconShare} alt="share" /> */}
      <ul className="page-footer_social-buttons">
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
      <img className="page-footer_share" src={IconShare} alt="share" />
    </div>
    <PlayMusicButton />
  </footer>
)

export default PageFooter
