import React, { useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ScrollToTopHOC from "../components/scrollToTopHOC/scrollToTopHOC"
import PageTitle from "../components/page-title/page-title"
import SingleCard from "../components/single-card/single-card"
import ButtonMore from "../components/button-more/button-more"
import PageFooter from "../components/footer/page-footer"
import MusicPlayerContext from "../context/MusicPlayerContext"
import SingleImage from "../images/single_image.png"
import NextPageBlock from "../components/next-page-block/next-page-block"

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
const musicPage = {
  singles: [
    {
      name: "Не принц",
      image: SingleImage,
      track: "http://www.alexkatz.me/codepen/music/interlude.mp3",
      visibly: true,
    },
    {
      name: "Не принц",
      image: SingleImage,
      track: "http://www.alexkatz.me/codepen/music/interlude.mp3",
      visibly: true,
    },
    {
      name: "Не принц",
      image: SingleImage,
      track: "http://www.alexkatz.me/codepen/music/interlude.mp3",
      visibly: true,
    },
    {
      name: "Не принц",
      image: SingleImage,
      track: "http://www.alexkatz.me/codepen/music/interlude.mp3",
      visibly: true,
    },
    {
      name: "Не принц",
      image: SingleImage,
      track: "http://www.alexkatz.me/codepen/music/interlude.mp3",
      visibly: true,
    },
    {
      name: "Не принц",
      image: SingleImage,
      track: "http://www.alexkatz.me/codepen/music/interlude.mp3",
      visibly: true,
    },
  ],
  background: {
    xs: "/images/musicpage-bg-768.jpg",
    sm: "/images/musicpage-bg-1024.jpg",
    md: "/images/musicpage-bg-1440.jpg",
    lg: "/images/musicpage-bg-fullsize.jpg",
  },
  moreMusicUrl: "",
}

const MusicPage = props => {
  const { getMusic } = props.data.marta
  console.log("getMusic", getMusic)
  const { isSinglePlaying, single, playSingle, pauseSingle } = useContext(
    MusicPlayerContext
  )

  return (
    <Layout bg={musicPage.background}>
      <div className="inner-container">
        <PageTitle title="Музыка" />
        <div className="music">
          {musicPage.singles.map((singleItem, index) => (
            <SingleCard
              {...singleItem}
              isPlaying={singleItem.track === single ? isSinglePlaying : false}
              playSingle={() => playSingle(singleItem.track)}
              pauseSingle={() => pauseSingle()}
              key={index}
            />
          ))}
        </div>
        <ButtonMore title="Больше музыки" moreUrl={musicPage.moreMusicUrl} />
        <NextPageBlock link="/contacts" title="Контакты" />
      </div>
      <PageFooter socialList={SocialNetwork} />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    marta {
      getMusic {
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
        moreMusicUrl
        singles {
          name
          image {
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
          visibly
        }
      }
    }
  }
`

export default ScrollToTopHOC(MusicPage)
