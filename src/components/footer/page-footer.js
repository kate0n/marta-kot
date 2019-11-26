import React from "react"
import PlayMusicButton from "../play-music-button/play-music-button"
import IconYoutube from "../../images/Youtube.svg"
import IconFacebook from "../../images/facebook.svg"
import IconInstagram from "../../images/insta.svg"
import IconVK from "../../images/vk.svg"
import IconOK from "../../images/ok.svg"
import IconShare from "../../images/share.svg"
const SocialNetwork = [
  { image: IconYoutube, url: "YouTube" },
  { image: IconFacebook, url: "Facebook" },
  { image: IconInstagram, url: "Instagram" },
  { image: IconVK, url: "VK" },
  { image: IconOK, url: "OK" },
]

const PageFooter = () => (
  <footer className="page-footer">
    <img src={IconShare} alt="" />
    <p className="page-footer_copyright text">
      2019 © Марта Кот. Сделано в{" "}
      <a target="_blank" rel="noopener" href="https://expanse.systems/">
        EXPANSE
      </a>
    </p>
    <PlayMusicButton />
  </footer>
)

export default PageFooter
