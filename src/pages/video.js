import React from "react"
import { graphql } from "gatsby"
import ScrollToTopHOC from "../components/scrollToTopHOC/scrollToTopHOC"
import Layout from "../components/layout"
import PageTitle from "../components/page-title/page-title"
import VideoCard from "../components/video-card/video-card"
import NextPageBlock from "../components/next-page-block/next-page-block"
import ButtonMore from "../components/button-more/button-more"
import PageFooter from "../components/footer/page-footer"
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
                hoverIcon {
                    url
                }
                image {
                    url
                }
            }
        }
        getVideo {
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
            moreVideosUrl
            videos {
                visibly
                previewImage {
                    lg {
                        url
                    }
                }
                preview {
                    mp4 {
                        url
                    }
                    webm {
                        url
                    }
                    ogg {
                        url
                    }
                }
                name
                url
            }╥
        }
    }
`

const VideoPage = props => {
  let { getVideo, getConcerts, getHomePage } = useClientQuery(
    props.data.marta,
    clientQuery,
    ["getVideo", "getConcerts", "getHomePage"],
  )
  return (
    <Layout
      isVisibleConcert={getConcerts && getConcerts.visibly}
      bg={getVideo && getVideo.background}
    >
      <div className="inner-container">
        <PageTitle title="Видео"/>
        <div className="video">
          {getVideo &&
          getVideo.videos
            .filter(video => video.visibly)
            .map((video, index) => <VideoCard {...video} key={index}/>)}
        </div>
        <ButtonMore
          title="Больше видео"
          moreUrl={getVideo && getVideo.moreVideosUrl}
        />
        <NextPageBlock link="/music" title="Музыка"/>
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
                    hoverIcon {
                        url
                    }
                    image {
                        url
                    }
                }
            }
            getVideo {
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
                moreVideosUrl
                videos {
                    visibly
                    previewImage {
                        lg {
                            url
                        }
                    }
                    preview {
                        mp4 {
                            url
                        }
                        webm {
                            url
                        }
                        ogg {
                            url
                        }
                    }
                    name
                    url
                }
            }
        }
    }
`

export default ScrollToTopHOC(VideoPage)
