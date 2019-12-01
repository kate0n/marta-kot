import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/page-title/page-title"
import NextPageBlock from "../components/next-page-block/next-page-block"
import PageFooter from "../components/footer/page-footer"

const concertPage = {
  background: {
    xs: "../images/concerts.png",
    sm: "../images/concerts.png",
    md: "../images/concerts.png",
    lg: "../images/main.png",
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
//{concertPage.background}
const ConcertPage = () => (
  <Layout bg={concertPage.background.lg}>
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
                  <h2 className="title_h2 title_h2--stroke">{concert.date}</h2>
                </div>
              </a>
            )
        )}
      </div>
      <NextPageBlock link="/video" title="Видео" />
    </div>
    <PageFooter />
  </Layout>
)

export default ConcertPage
