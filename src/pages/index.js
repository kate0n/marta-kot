import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer/footer"
import Banner from "../components/banner/banner"

// временные
import IconYoutube from "../images/Youtube.svg"
import IconFacebook from "../images/facebook.svg"
import IconInstagram from "../images/insta.svg"
import IconVK from "../images/vk.svg"
import IconOK from "../images/ok.svg"
const homePage = {
  background: {
    xs: "/images/homepage-bg-768.jpg",
    sm: "/images/homepage-bg-1024.jpg",
    md: "/images/homepage-bg-1440.jpg",
    lg: "/images/homepage-bg-fullsize.jpg",
  },
  socialList: [
    { name: "YouTube", image: IconYoutube, url: "YouTube" },
    { name: "Facebook", image: IconFacebook, url: "Facebook" },
    { name: "Instagram", image: IconInstagram, url: "Instagram" },
    { name: "VK", image: IconVK, url: "VK" },
    { name: "OK", image: IconOK, url: "OK" },
  ],
  track: "https://www.milannohejl.cz/subdom/codepen/Shantifax-KukuPuja.mp3",
  mainBanner: {
    content:
      "22.10.2019 — Москва, «Флакон», МосВегФест 2019 • 22.10.2019 — Москва, «Флакон», МосВегФест 2019 • 22.10.2019 Москва, «Флакон», МосВегФест 2019 • ",
    visibly: true,
  },
}
// временные

const IndexPage = props => {
  const { getHomePage } = props.data.marta
  console.log("getHomePage", getHomePage)
  return (
    <>
      <Layout bg={homePage.background}>
        <Footer {...homePage} />
      </Layout>
      <Banner
        content={homePage.mainBanner.content}
        visibly={homePage.mainBanner.visibly}
      />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    marta {
      getHomePage {
        background {
          xs {
            url
          }
          sm {
            url
          }
          md {
            url
          }
          lg {
            url
          }
        }
        track {
          url
        }
        mainBanner {
          content
          visibly
        }
        socialList {
          name
          url
          image {
            url
          }
        }
      }
    }
  }
`
