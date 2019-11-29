import React from "react"
import { FullsizePicture } from "react-responsive-picture"

import Layout from "../components/layout"
import Footer from "../components/footer/footer"
import Banner from "../components/banner/banner"
import MusicPlayerContext from "../context/MusicPlayerContext"

// temporary
import IconYoutube from "../images/Youtube.svg"
import IconFacebook from "../images/facebook.svg"
import IconInstagram from "../images/insta.svg"
import IconVK from "../images/vk.svg"
import IconOK from "../images/ok.svg"
const homePage = {
  background: "",
  socialList: [
    { name: "YouTube", image: IconYoutube, url: "YouTube" },
    { name: "Facebook", image: IconFacebook, url: "Facebook" },
    { name: "Instagram", image: IconInstagram, url: "Instagram" },
    { name: "VK", image: IconVK, url: "VK" },
    { name: "OK", image: IconOK, url: "OK" },
  ],
  track: "http://www.alexkatz.me/codepen/music/interlude.mp3",
  mainBanner: {
    content:
      "22.10.2019 — Москва, «Флакон», МосВегФест 2019 • 22.10.2019 — Москва, «Флакон», МосВегФест 2019 • 22.10.2019 Москва, «Флакон», МосВегФест 2019 • ",
    visibly: true,
  },
}
const IndexPage = () => (
  <>
    <Layout>
      <Footer {...homePage} />
    </Layout>
    <Banner
      content={homePage.mainBanner.content}
      visibly={homePage.mainBanner.visibly}
    />
  </>
  //   </FullsizePicture>
  // </div>
)

export default IndexPage

// <div style={{ height: "864px" }}>
//   <FullsizePicture
//     sources={[
//       {
//         srcSet: "../images/main.png",
//         media: "(max-width: 320px)",
//       },
//       {
//         srcSet: "../images/main.png",
//         media: "(max-width: 768px)",
//       },
//       {
//         srcSet: "../images/main.png",
//         media: "(max-width: 1024px)",
//       },
//       {
//         srcSet: "../images/main.png",
//         media: "(max-width: 1440px)",
//       },
//       {
//         srcSet: "../images/main.png",
//       },
//     ]}
//   >
