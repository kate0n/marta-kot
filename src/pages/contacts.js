import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/page-title/page-title"
import PlayMusicButton from "../components/play-music-button/play-music-button"
import IconYoutube from "../images/Youtube.svg"
import IconFacebook from "../images/facebook.svg"
import IconInstagram from "../images/insta.svg"
import IconVK from "../images/vk.svg"
import IconOK from "../images/ok.svg"

const SocialNetwork = [
  { image: IconYoutube, url: "YouTube" },
  { image: IconFacebook, url: "Facebook" },
  { image: IconInstagram, url: "Instagram" },
  { image: IconVK, url: "VK" },
  { image: IconOK, url: "OK" },
]

const contactsPage = {
  phone: "+7 903 158-68-29",
  email: "pr@martakot.com",
  background: "",
}

const ContactsPage = () => (
  <Layout>
    <div className="inner-container">
      <PageTitle title="Контакты" />
      <div className="contacts">
        <h3 className="contacts_mail title_h3">pr@martakot.com</h3>
        <h2 className="contacts_tel title_h2">
          <a href={`tel:${contactsPage.phone}`}>+7 903 158-68-29</a>
        </h2>
      </div>
      <ul className="contacts_social-buttons footer_social-buttons">
        {SocialNetwork.map((socialItem, index) => (
          <li key={index}>
            <a
              className="social_button"
              target={"_blank"}
              rel="noopener"
              href={socialItem.url}
            >
              <img src={socialItem.image} alt="" />
            </a>
          </li>
        ))}
      </ul>
      <p className="contacts_copyright text">
        2019 © Марта Кот. Сделано в{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://expanse.systems/"
        >
          EXPANSE
        </a>
      </p>
    </div>
    <div className="contacts_play-music-button">
      <PlayMusicButton />
    </div>
  </Layout>
)

export default ContactsPage
