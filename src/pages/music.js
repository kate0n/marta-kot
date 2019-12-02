import React, { useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/page-title/page-title"
import SingleCard from "../components/single-card/single-card"
import ButtonMore from "../components/button-more/button-more"
import PageFooter from "../components/footer/page-footer"
import MusicPlayerContext from "../context/MusicPlayerContext"
import SingleImage from "../images/single_image.png"
import NextPageBlock from "../components/next-page-block/next-page-block"

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
    xs: "/images/musicpage-bg-fullsize.jpg",
    sm: "/images/musicpage-bg-fullsize.jpg",
    md: "/images/musicpage-bg-fullsize.jpg",
    lg: "/images/musicpage-bg-fullsize.jpg",
  },
  moreMusicUrl: "",
}

const MusicPage = props => {
  const { getMusic } = props.data.marta
  console.log("getHomePage", getMusic)
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
      <PageFooter />
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

export default MusicPage
