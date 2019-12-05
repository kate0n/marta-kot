import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer/footer"
import Banner from "../components/banner/banner"
import gql from "graphql-tag"
import { useClientQuery } from "../libs/useClientQuery"

export const isBrowser = () => typeof window !== "undefined"

const clientQuery = gql`
  {
    getConcerts {
      updateAt
      visibly
    }
    getHomePage {
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
      track {
        url
      }
      mainBanner {
        content
        url
        visibly
      }
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
  }
`

const IndexPage = props => {
  let { getHomePage, getConcerts } = useClientQuery(
    props.data.marta,
    clientQuery,
    ["getHomePage", "getConcerts"]
  )
  console.log("getHomePage: ", getHomePage)
  console.log("getConcerts: ", getConcerts)

  return (
    <>
      <Layout
        isVisibleConcert={getConcerts && getConcerts.visibly}
        bg={getHomePage && getHomePage.background}
      >
        <Footer {...getHomePage} />
      </Layout>
      {getHomePage && getHomePage.mainBanner.visibly && (
        <Banner
          url={getHomePage && getHomePage.mainBanner.url}
          content={getHomePage && getHomePage.mainBanner.content}
        />
      )}
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    marta {
      getConcerts {
        updateAt
        visibly
      }
      getHomePage {
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
        track {
          url
        }
        mainBanner {
          content
          url
          visibly
        }
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
    }
  }
`
