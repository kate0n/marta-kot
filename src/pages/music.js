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
import gql from "graphql-tag"
import { useClientQuery } from "../libs/useClientQuery"

const clientQuery = gql`
    {
        getConcerts {
            updateAt
            visibly
        }
        getHomePage {
            updateAt
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
            updateAt
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
`

const MusicPage = props => {
  let { getMusic, getConcerts, getHomePage } = useClientQuery(props.data.marta, clientQuery, [
    "getMusic", "getConcerts", "getHomePage",
  ])
  const { isSinglePlaying, single, playSingle, pauseSingle } = useContext(
    MusicPlayerContext,
  )


  return (
    <Layout isVisibleConcert={getConcerts && getConcerts.visibly} bg={getMusic && getMusic.background}>
      <div className="inner-container">
        <PageTitle title="Музыка"/>
        <div className="music">
          {getMusic && getMusic.singles && getMusic.singles.map((singleItem, index) => (
            <SingleCard
              {...singleItem}
              isPlaying={singleItem.track.url === single ? isSinglePlaying : false}
              playSingle={() => playSingle(singleItem.track.url)}
              pauseSingle={() => pauseSingle()}
              key={index}
            />
          ))}
        </div>
        <ButtonMore title="Больше музыки" moreUrl={getMusic && getMusic.moreMusicUrl}/>
        <NextPageBlock link="/contacts" title="Контакты"/>
      </div>
      <PageFooter socialList={getHomePage && getHomePage.socialList}/>
    </Layout>
  )
}

export const pageQuery = graphql`
    {
        marta {
            getConcerts {
                visibly
                updateAt
            }
            getHomePage {
                updateAt
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
                updateAt
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
