import React, { useState, useRef } from "react"
import YouTube from "react-youtube"
import IconVideoPlay from "../../images/video-play-btn.svg"

const VideoCard = ({ visibly, preview, name, url }) => {
  const videoEl = useRef(null)

  const [youTube, setYouTube] = useState({
    isPlaying: false,
  })

  const stopYouTubeVideo = event => {
    setYouTube({ ...youTube, isPlaying: false })
  }

  const playYouTubeVideo = () => {
    setYouTube({ ...youTube, isPlaying: true })
  }

  const playPreview = () => {
    !youTube.isPlaying && videoEl.current.play()
  }

  const pausePreview = () => {
    !youTube.isPlaying && videoEl.current.pause()
  }

  const opts = {
    height: "264",
    width: "448",
    playerVars: {
      autoplay: 1,
    },
  }

  const onReady = ({ target }) => {
    target.pauseVideo()
  }

  return (
    visibly && (
      <div className="video_card-wrapper">
        <div
          className="video_card"
          onMouseEnter={playPreview}
          onMouseLeave={pausePreview}
        >
          {youTube.isPlaying && (
            <div onClick={playYouTubeVideo}>
              <YouTube
                videoId={url}
                opts={opts}
                onReady={onReady}
                onEnd={stopYouTubeVideo}
              />
            </div>
          )}
          {!youTube.isPlaying && (
            <video
              ref={videoEl}
              preload="auto"
              loop="loop"
              className="video_card-video"
            >
              <source src={preview.mp4} type="video/mp4" />
              <source src={preview.ogg} type="video/ogg" />
              <source src={preview.webm} type="video/webm" />
            </video>
          )}
          {/* overlay, play btn */}
          {!youTube.isPlaying && (
            <div className="video_card-overlay" onClick={playYouTubeVideo}>
              <button className="video_card_play-btn">
                <img src={IconVideoPlay} alt="" />
              </button>
            </div>
          )}
        </div>

        <h4 className="title_h4">{name}</h4>
      </div>
    )
  )
}

export default VideoCard
