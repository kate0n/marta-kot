import React from "react"
import PlayMusicButton from "../play-music-button/play-music-button"
import IconShare from "../../images/share.svg"

const PageFooter = () => (
  <footer className="page-footer">
    <img className="page-footer_share" src={IconShare} alt="share" />
    <p className="page-footer_copyright text">
      2019 © Марта Кот. Сделано в{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://expanse.systems/"
      >
        EXPANSE
      </a>
    </p>
    <PlayMusicButton />
  </footer>
)

export default PageFooter
