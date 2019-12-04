import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer/footer"
import Banner from "../components/banner/banner"

export const isBrowser = () => typeof window !== "undefined"


const IndexPage = props => {
  const { getHomePage, getConcerts } = props.data.marta

  return (
    <>
      <Layout isVisibleConcert={getConcerts && getConcerts.visibly} bg={getHomePage && getHomePage.background}>
        <Footer {...getHomePage} />
      </Layout>
      {
          getHomePage && getHomePage.mainBanner.visibly && (
          <Banner content={getHomePage && getHomePage.mainBanner.content} url="#"/>
        )
      }
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
    {
        marta {
            getConcerts {
                visibly
            }
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
                    hoverIcon{
                        url
                    }
                    image {
                        url
                    }
                }
            }
        }
    }
`
