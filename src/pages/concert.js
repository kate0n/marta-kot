import React from "react"
import { graphql } from "gatsby"
import { formatWithOptions } from "date-fns/fp"
import ru from "date-fns/locale/ru"
import Layout from "../components/layout"
import PageTitle from "../components/page-title/page-title"
import NextPageBlock from "../components/next-page-block/next-page-block"
import PageFooter from "../components/footer/page-footer"


const ConcertPage = props => {
  const { getConcerts, getHomePage } = props.data.marta
  console.log("getConcerts", getConcerts)
  const dateToString = formatWithOptions({ locale: ru }, "d MMMM yyyy")
  return (
    <Layout isVisibleConcert={getConcerts && getConcerts.visibly} bg={getConcerts && getConcerts.background}>
      <div className="inner-container">
        <PageTitle title="Концерты"/>
        <div className="concerts">
          {
            getConcerts
            && getConcerts.concerts
            && getConcerts.concerts
              .filter(item => item.visibly === true)
              .map((concert, index) => (
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
                      {dateToString(new Date(concert.date))}
                    </h2>
                  </div>
                </a>
              ))}
        </div>
        <NextPageBlock link="/video" title="Видео"/>
      </div>
      <PageFooter socialList={getHomePage && getHomePage.socialList}/>
    </Layout>
  )
}

export const pageQuery = graphql`
    {
        marta {
            getHomePage {
                socialList {
                    name
                    url
                    hoverIcon{
                        url
                    }
                    image {
                        url
                    }
                }
            }
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
