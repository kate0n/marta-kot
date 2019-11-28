import React, { useRef } from "react"
import MartaKotRoundText from "../../images/marta_kot_round_text.svg"
import IconPlay from "../../images/miusic_play.svg"
import IconPause from "../../images/music_pause.svg"
import MusicPlayerContext from "../../context/MusicPlayerContext"

const PlayMusicButton = ({ className }) => {
  const audioEl = useRef(null)

  return (
    <MusicPlayerContext.Consumer>
      {context => {
        // если включен сингл, то вызывается playTrack с флагом true
        // context.isSinglePlaying && (() => context.playTrack(audioEl, true))
        console.log("isSinglePlaying", context.isSinglePlaying)
        return (
          <div className={className ? className : "music-btn"}>
            <audio
              src={context.isSinglePlaying ? context.single : context.track}
              ref={audioEl}
            ></audio>
            <img
              src={MartaKotRoundText}
              alt="Слушать Марта Кот"
              className="music-btn-round"
            />
            {context.isTrackPlaying || context.isSinglePlaying ? (
              <img
                onClick={() => context.pauseTrack(audioEl)}
                src={IconPause}
                alt="На паузу"
                className="music-btn-toogler"
              />
            ) : (
              <img
                onClick={() =>
                  context.playTrack(audioEl, context.isSinglePlaying)
                }
                src={IconPlay}
                alt="Включить"
                className="music-btn-toogler"
              />
            )}
          </div>
        )
      }}
    </MusicPlayerContext.Consumer>
  )
}

export default PlayMusicButton
