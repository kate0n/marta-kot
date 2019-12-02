import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/page-title/page-title"
import NextPageBlock from "../components/next-page-block/next-page-block"
import PageFooter from "../components/footer/page-footer"

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
const concertPage = {
  background: {
    xs: "/images/concertpage-bg-768.jpg",
    sm: "/images/concertpage-bg-1024.jpg",
    md: "/images/concertpage-bg-1024.jpg",
    lg: "/images/concertpage-bg-fullsize.jpg",
  },
  concerts: [
    {
      visibly: true,
      name: "",
      description: "",
      city: "Москва",
      address: "«Флакон», МосВегФест 2019",
      date: "22 октября 2019",
      url: "",
    },
    {
      visibly: true,
      name: "",
      description: "",
      city: "Москва",
      address: "«Флакон», МосВегФест 2019",
      date: "22 октября 2019",
      url: "",
    },
    {
      visibly: true,
      name: "",
      description: "",
      city: "Москва",
      address: "«Флакон», МосВегФест 2019",
      date: "22 октября 2019",
      url: "",
    },
    {
      visibly: true,
      name: "",
      description: "",
      city: "Москва",
      address: "«Флакон», МосВегФест 2019",
      date: "22 октября 2019",
      url: "",
    },
  ],
  visibly: true,
}

const ConcertPage = props => {
  const { getConcerts } = props.data.marta
  console.log("getConcerts", getConcerts)
  return (
    <Layout bg={concertPage.background}>
      <div className="inner-container">
        <PageTitle title="Концерты" />
        <div className="concerts">
          {concertPage.concerts.map(
            (concert, index) =>
              concert.visibly && (
                <a
                  href={concert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <div className="concerts_item">
                    <p className="links">{concert.address}</p>
                    <h2 className="title_h2">{concert.city}</h2>
                    <h2 className="title_h2 title_h2--stroke">
                      {concert.date}
                    </h2>
                  </div>
                </a>
              )
          )}
        </div>
        <NextPageBlock link="/video" title="Видео" />
      </div>
      <PageFooter socialList={SocialNetwork} />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    marta {
      getConcerts {
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
        visibly
        concerts {
          visibly
          name
          description
          city
          address
          date
          url
        }
      }
    }
  }
`

export default ConcertPage
