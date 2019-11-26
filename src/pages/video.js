import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import NextPageBlock from "../components/next-page-block/next-page-block"
import PageFooter from "../components/footer/page-footer"

const VideoPage = () => (
  <Layout>
    <div className="inner-container">
      <PageTitle title="Видео" />
      <div className="videos"></div>
      <NextPageBlock link="/music" title="Музыка" />
    </div>
    <PageFooter />
  </Layout>
)

export default VideoPage
