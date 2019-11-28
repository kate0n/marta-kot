import React, { useState } from "react"

const MusicPlayerContext = React.createContext()

const MusicPlayerProvider = ({ children }) => {
  const [trackPlayer, setTrackPlayer] = useState({
    isTrackPlaying: false,
    track: "https://www.milannohejl.cz/subdom/codepen/Shantifax-KukuPuja.mp3",
    currentTime: 0,
  })

  const [singlePlayer, setSinglePlayer] = useState({
    isSinglePlaying: false,
    single: "",
  })

  const playTrack = (audioEl, isSingle) => {
    setTrackPlayer({
      ...trackPlayer,
      // если playTrack вызывается при клике на карточку сингла isTrackPlaying остается false
      isTrackPlaying: isSingle ? false : true,
    })
    audioEl.current.play()
    console.log(
      "playTrack() invoked, isTrackPlaying:",
      { isTrackPlaying: isSingle ? false : true },
      "with audio ref:",
      audioEl.current
    )
  }

  const pauseTrack = audioEl => {
    setTrackPlayer({
      ...trackPlayer,
      isTrackPlaying: false,
      currentTime: audioEl.current.currentTime,
    })
    setSinglePlayer({
      ...singlePlayer,
      isSinglePlaying: false,
    })
    audioEl.current.pause()
    console.log(
      "pauseTrack() invoked, isTrackPlaying:",
      trackPlayer.isTrackPlaying,
      "audioEl.current.currentTime",
      audioEl.current.currentTime
    )
  }

  const playSingle = single => {
    setTrackPlayer({
      ...trackPlayer,
      isTrackPlaying: false,
    })
    setSinglePlayer({
      isSinglePlaying: true,
      single: single,
    })
  }

  const pauseSingle = () => {
    setSinglePlayer({
      ...singlePlayer,
      isSinglePlaying: false,
    })
  }

  return (
    <MusicPlayerContext.Provider
      value={{
        track: trackPlayer.track,
        isTrackPlaying: trackPlayer.isTrackPlaying,
        playTrack: playTrack,
        pauseTrack: pauseTrack,
        isSinglePlaying: singlePlayer.isSinglePlaying,
        single: singlePlayer.single,
        playSingle: playSingle,
        pauseSingle: pauseSingle,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  )
}

export default MusicPlayerContext
export { MusicPlayerProvider }
