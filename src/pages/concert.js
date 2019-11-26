import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import NextPageBlock from "../components/next-page-block/next-page-block"
import PageFooter from "../components/footer/page-footer"

const concertPage = [
  {
    location: "«Флакон», МосВегФест 2019",
    city: "Москва",
    date: "22 октября 2019",
    link: "",
  },
  {
    location: "ВТБ Арена, Динамо",
    city: "Москва",
    date: "26 октября 2019",
    link: "",
  },
  {
    location: "RestoClub",
    city: "Иваново",
    date: "6 ноября 2019",
    link: "",
  },
]

const ConcertPage = () => (
  <Layout>
    <div className="inner-container">
      <PageTitle title="Концерты" />
      <div className="concerts">
        {concertPage.map((concert, index) => (
          <a href={concert.link} target="_blank" rel="noopener">
            <p className="concerts_item" key={index}>
              <p className="links">{concert.location}</p>
              <h2 className="title_h2">{concert.city}</h2>
              <h2 className="title_h2 title_h2--stroke">{concert.date}</h2>
            </p>
          </a>
        ))}
      </div>
      <NextPageBlock link="/video" title="Видео" />
    </div>
    <PageFooter />
  </Layout>
)

export default ConcertPage
