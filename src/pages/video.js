import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/page-title/page-title"
import VideoCard from "../components/video-card/video-card"
import NextPageBlock from "../components/next-page-block/next-page-block"
import PageFooter from "../components/footer/page-footer"

const videosArr = [
  {
    visibly: true,
    preview: "",
    name: "Маленький шаг",
    url: "youtube.co,",
  },
  {
    visibly: true,
    preview: "",
    name: "Аэропорты",
    url: "youtube.co,",
  },
  {
    visibly: true,
    preview: "",
    name: "Иду на красный",
    url: "youtube.co,",
  },
  {
    visibly: true,
    preview: "",
    name: "Баста",
    url: "youtube.co,",
  },
]

const VideoPage = ({ videos = videosArr, background, moreVideosUrl }) => (
  <Layout>
    <div className="inner-container">
      <PageTitle title="Видео" />
      <div className="video">
        {videos.map((video, index) => (
          <VideoCard name={video.name} />
        ))}
      </div>
      <div className="video_more">
        <button className="button links">
          <a href={moreVideosUrl} target="_blank" rel="noopener">
            Больше видео
          </a>
        </button>
      </div>
      <NextPageBlock link="/music" title="Музыка" />
    </div>
    <PageFooter />
  </Layout>
)

export default VideoPage
