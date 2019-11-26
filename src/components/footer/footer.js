import React from "react"
import PlayMusicButton from "../play-music-button/play-music-button"
import IconYoutube from "../../images/Youtube.svg"
import IconFacebook from "../../images/facebook.svg"
import IconInstagram from "../../images/insta.svg"
import IconVK from "../../images/vk.svg"
import IconOK from "../../images/ok.svg"

const SocialNetwork = [
  { image: IconYoutube, url: "YouTube" },
  { image: IconFacebook, url: "Facebook" },
  { image: IconInstagram, url: "Instagram" },
  { image: IconVK, url: "VK" },
  { image: IconOK, url: "OK" },
]

const Footer = () => (
  <footer className="footer">
    {/* <div  className="footer_container"> */}
    <ul className="footer_social-buttons">
      {SocialNetwork.map((socialItem, index) => (
        <li>
          <a
            className="social_button"
            target={"_blank"}
            rel="noopener"
            href={socialItem.url}
            key={index}
          >
            <img src={socialItem.image} alt="" />
          </a>
        </li>
      ))}
    </ul>

    <PlayMusicButton />
    {/* </div> */}
  </footer>
)

export default Footer
