import React, { useState, useRef } from "react"
import YouTube from "react-youtube"
import IconVideoPlay from "../../images/video-play-btn.svg"

const VideoCard = ({ preview, name, url }) => {

  const getVideoId = url => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
    const match = url.match(regExp)
    if (match && match[7].length == 11) {
      return match[7]
    } else {
      alert("Could not extract video ID.")
    }
  }

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
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  const onReady = ({ target }) => {
    target.playVideo()
  }

  return (
    <div className="video_card-wrapper">
      <div
        className="video_card"
        onMouseEnter={playPreview}
        onMouseLeave={pausePreview}
      >
        {youTube.isPlaying && (
          <div onClick={playYouTubeVideo} style={{ height: "100%" }}>
            <YouTube
              videoId={getVideoId(url)}
              opts={opts}
              onReady={onReady}
              onEnd={stopYouTubeVideo}
              containerClassName="video_card_youtube"
            />
          </div>
        )}
        {!youTube.isPlaying && (
          <video
            ref={videoEl}
            preload="auto"
            loop="loop"
            className="video_card_preview"
          >
            {
              preview.mp4 &&
              <source src={preview.mp4.url} type="video/mp4" />
            }
            {
              preview.ogg &&
              <source src={preview.ogg.url} type="video/ogg" />
            }
            {
              preview.webm &&
              <source src={preview.webm.url} type="video/webm" />
            }
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
}

export default VideoCard
