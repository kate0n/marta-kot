import React from "react"
import { graphql } from "gatsby"
import ScrollToTopHOC from "../components/scrollToTopHOC/scrollToTopHOC"
import Layout from "../components/layout"
import PageTitle from "../components/page-title/page-title"
import PlayMusicButton from "../components/play-music-button/play-music-button"
import SocialButton from "../components/SocialButton/SocialButton"
import { useClientQuery } from "../libs/useClientQuery"
import gql from "graphql-tag"

const clientQuery = gql`
  {
    getConcerts {
      visibly
      updateAt
    }
    getContacts {
      updateAt
      phone
      email
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
  }
`

const ContactsPage = props => {
  const { getContacts, getHomePage, getConcerts } = useClientQuery(
    props.data.marta,
    clientQuery,
    ["getContacts", "getHomePage", "getConcerts"]
  )

  return (
    <Layout
      isVisibleConcert={getConcerts && getConcerts.visibly}
      bg={getContacts && getContacts.background}
    >
      <div className="inner-container">
        <PageTitle title="Контакты" />
        <div className="contacts">
          <h3 className="contacts_mail title_h3">
            <a
              aria-label="email"
              href={`mailto:${getContacts && getContacts.email}`}
            >
              {getContacts && getContacts.email}
            </a>
          </h3>
          <h2 className="contacts_tel">
            <a
              aria-label="phone"
              href={`tel:${getContacts && getContacts.phone}`}
            >
              {getContacts && getContacts.phone}
            </a>
          </h2>
        </div>
        <ul className="contacts_social-buttons footer_social-buttons">
          {getHomePage &&
            getHomePage.socialList &&
            getHomePage.socialList.map((socialItem, index) => {
              return (
                <li key={index}>
                  <SocialButton {...socialItem} />
                </li>
              )
            })}
        </ul>
        <p className="contacts_copyright text">
          2019 © Марта Кот. Сделано в{" "}
          <a
            aria-label="developer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://expanse.systems/"
          >
            EXPANSE
          </a>
        </p>
      </div>
      <div className="contacts_play-music-button">
        <PlayMusicButton />
      </div>
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
      getContacts {
        updateAt
        phone
        email
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
    }
  }
`

export default ScrollToTopHOC(ContactsPage)
