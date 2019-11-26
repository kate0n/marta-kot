import React from "react"

const VideoCard = ({ name }) => (
  <div className="video_card_wrapper">
    <div className="video_card">
      <video controls preload="metadata">
        <source src="https://www.youtube.com/watch?v=e6a5_u8xheI" />
        {/* <source
          src="https://www.youtube.com/watch?v=e6a5_u8xheI"
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
        <source
          src="https://www.youtube.com/watch?v=e6a5_u8xheI"
          type='video/webm; codecs="vp8, vorbis"'
        />
        Тег video не поддерживается вашим браузером.{" "}
        <a href="video/duel.mp4">Скачайте видео</a>. */}
      </video>
      <div className="video_card_fade"> </div>
    </div>

    <h4 className="title_h4">{name}</h4>
  </div>
)

export default VideoCard
