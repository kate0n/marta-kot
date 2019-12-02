import React, { useContext } from "react"
import MartaKotRoundText from "../../images/marta_kot_round_text.svg"
import IconPlay from "../../images/miusic_play.svg"
import IconPause from "../../images/music_pause.svg"
import MusicPlayerContext from "../../context/MusicPlayerContext"

const PlayMusicButton = ({ className }) => {
  const { isTrackPlaying, isSinglePlaying, playTrack, pauseTrack } = useContext(
    MusicPlayerContext
  )
  return (
    <div className={className ? className : "music-btn"}>
      <img
        src={MartaKotRoundText}
        alt="Слушать Марта Кот"
        className="music-btn-round"
      />
      {isTrackPlaying || isSinglePlaying ? (
        <img
          onClick={pauseTrack}
          src={IconPause}
          alt="На паузу"
          className="toogler"
        />
      ) : (
        <img
          onClick={playTrack}
          src={IconPlay}
          alt="Включить"
          className="toogler toogler-play"
        />
      )}
    </div>
  )
}

export default PlayMusicButton
