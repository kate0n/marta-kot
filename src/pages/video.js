import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/page-title/page-title"
import VideoCard from "../components/video-card/video-card"
import NextPageBlock from "../components/next-page-block/next-page-block"
import ButtonMore from "../components/button-more/button-more"
import PageFooter from "../components/footer/page-footer"

const videoPage = {
  videos: [
    {
      visibly: true,
      preview: {
        mp4: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        webm: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        ogg: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
      },
      name: "Маленький шаг",
      url: "KCtLAqD63G4",
    },
    {
      visibly: true,
      preview: {
        mp4: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        webm: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        ogg: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
      },
      name: "Аэропорты",
      url: "KCtLAqD63G4",
    },
    {
      visibly: true,
      preview: {
        mp4: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        webm: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        ogg: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
      },
      name: "Иду на красный",
      url: "KCtLAqD63G4",
    },
    {
      visibly: true,
      preview: {
        mp4: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        webm: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
        ogg: "https://giant.gfycat.com/VerifiableTerrificHind.mp4",
      },
      name: "Баста",
      url: "KCtLAqD63G4",
    },
  ],
  background: {
    xs: "../images/video.png",
    sm: "../images/video.png",
    md: "../images/video.png",
    lg: "../images/main.png",
  },
  moreVideosUrl: "https://www.youtube.com/user/MartaKotMusic",
}

const VideoPage = () => {
  return (
    <Layout bg={videoPage.background.lg}>
      <div className="inner-container">
        <PageTitle title="Видео" />
        <div className="video">
          {videoPage.videos.map((video, index) => (
            <VideoCard {...video} key={index} />
          ))}
        </div>
        <ButtonMore title="Больше видео" moreUrl={videoPage.moreVideosUrl} />
        <NextPageBlock link="/music" title="Музыка" />
      </div>
      <PageFooter />
    </Layout>
  )
}

export default VideoPage
