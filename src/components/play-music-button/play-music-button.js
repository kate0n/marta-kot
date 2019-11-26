import React, { useState } from "react"
import PlayBtn from "../../images/play_btn.svg"

const PlayMusicButton = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)

  return (
    <div className="play-music-button">
      <img src={PlayBtn} alt="Слушать Марта Кот" />
    </div>
  )
}

export default PlayMusicButton
