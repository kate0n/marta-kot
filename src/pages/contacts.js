import React from "react"
import { graphql } from "gatsby"
import ScrollToTopHOC from "../components/scrollToTopHOC/scrollToTopHOC"
import Layout from "../components/layout"
import PageTitle from "../components/page-title/page-title"
import PlayMusicButton from "../components/play-music-button/play-music-button"
import SocialButton from "../components/SocialButton/SocialButton"


const ContactsPage = props => {
  const { getContacts, getHomePage, getConcerts } = props.data.marta
  console.log("ContactsPage: ", getContacts)
  console.log("ContactsPage: ", getHomePage)

  return (
    <Layout isVisibleConcert={getConcerts.visibly} bg={getContacts.background}>
      <div className="inner-container">
        <PageTitle title="Контакты"/>
        <div className="contacts">
          <h3 className="contacts_mail title_h3">
            <a href={`mailto:${getContacts.email}`}>{getContacts.email}</a>
          </h3>
          <h2 className="contacts_tel title_h2">
            <a href={`tel:${getContacts.phone}`}>{getContacts.phone}</a>
          </h2>
        </div>
        <ul className="contacts_social-buttons footer_social-buttons">
          {
            getHomePage.socialList.map((socialItem, index) => {
              console.log("socialItem: ", socialItem)
              return (
                <li key={index}>
                  <SocialButton
                    {...socialItem}
                  />
                </li>
              )
            })
          }
        </ul>
        <p className="contacts_copyright text">
          2019 © Марта Кот. Сделано в{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://expanse.systems/"
          >
            EXPANSE
          </a>
        </p>
      </div>
      <div className="contacts_play-music-button">
        <PlayMusicButton/>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
    {
        marta {
            getConcerts {
                visibly
            }
            getContacts {
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

export default ScrollToTopHOC(ContactsPage)
