import React, { useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ScrollToTopHOC from "../components/scrollToTopHOC/scrollToTopHOC"
import PageTitle from "../components/page-title/page-title"
import SingleCard from "../components/single-card/single-card"
import ButtonMore from "../components/button-more/button-more"
import PageFooter from "../components/footer/page-footer"
import MusicPlayerContext from "../context/MusicPlayerContext"
import NextPageBlock from "../components/next-page-block/next-page-block"



const MusicPage = props => {
  const { getMusic, getConcerts, getHomePage } = props.data.marta
  console.log("getMusic", getMusic, getConcerts)
  const { isSinglePlaying, single, playSingle, pauseSingle } = useContext(
    MusicPlayerContext,
  )

  return (
    <Layout isVisibleConcert={getConcerts.visibly} bg={getMusic.background}>
      <div className="inner-container">
        <PageTitle title="Музыка"/>
        <div className="music">
          {getMusic.singles.map((singleItem, index) => (
            <SingleCard
              {...singleItem}
              isPlaying={singleItem.track === single ? isSinglePlaying : false}
              playSingle={() => playSingle(singleItem.track)}
              pauseSingle={() => pauseSingle()}
              key={index}
            />
          ))}
        </div>
        <ButtonMore title="Больше музыки" moreUrl={getMusic.moreMusicUrl}/>
        <NextPageBlock link="/contacts" title="Контакты"/>
      </div>
      <PageFooter socialList={getHomePage.socialList}/>
    </Layout>
  )
}

export const pageQuery = graphql`
    {
        marta {
            getConcerts {
                visibly
            }
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
