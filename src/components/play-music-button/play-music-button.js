import React from "react"
import MartaKotRoundText from "../../images/marta_kot_round_text.svg"
import IconPlay from "../../images/miusic_play.svg"
import IconPause from "../../images/music_pause.svg"
import MusicPlayerContext from "../../context/MusicPlayerContext"

const PlayMusicButton = ({ className }) => {
  return (
    <MusicPlayerContext.Consumer>
      {context => {
        return (
          <div className={className ? className : "music-btn"}>
            <img
              src={MartaKotRoundText}
              alt="Слушать Марта Кот"
              className="music-btn-round"
            />
            {context.isTrackPlaying || context.isSinglePlaying ? (
              <img
                onClick={context.pauseTrack}
                src={IconPause}
                alt="На паузу"
                className="toogler"
              />
            ) : (
              <img
                onClick={context.playTrack}
                src={IconPlay}
                alt="Включить"
                className="toogler"
              />
            )}
          </div>
        )
      }}
    </MusicPlayerContext.Consumer>
  )
}

export default PlayMusicButton
