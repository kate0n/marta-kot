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
    currentTime: 0,
  })

  const audioEl = document.getElementById("audio")

  const getTrack = track => {
    setTrackPlayer({
      ...trackPlayer,
      track: track,
    })
  }

  const playTrack = () => {
    debugger
    setTrackPlayer({
      ...trackPlayer,
      // если playTrack вызывается для продолжения сингла
      isTrackPlaying: singlePlayer.isSinglePlaying ? false : true,
    })
    console.log("playTrack()", document.getElementById("audio"))
    document.getElementById("audio").currentTime = trackPlayer.currentTime
    document.getElementById("audio").play()
  }

  const pauseTrack = () => {
    // debugger
    setTrackPlayer({
      ...trackPlayer,
      isTrackPlaying: false,
      currentTime: document.getElementById("audio").currentTime,
    })
    setSinglePlayer({
      ...singlePlayer,
      isSinglePlaying: false,
    })
    document.getElementById("audio").pause()
  }

  const playSingle = single => {
    debugger
    setTrackPlayer({
      ...trackPlayer,
      isTrackPlaying: false,
    })
    setSinglePlayer({
      isSinglePlaying: true,
      single: single,
    })
    document.getElementById("audio").currentTime = singlePlayer.currentTime
    document.getElementById("audio").play()
  }

  const pauseSingle = () => {
    // debugger
    setSinglePlayer({
      ...singlePlayer,
      isSinglePlaying: false,
      currentTime: document.getElementById("audio").currentTime,
    })
    document.getElementById("audio").pause()
  }

  return (
    <MusicPlayerContext.Provider
      value={{
        // for track,
        getTrack: getTrack,
        track: trackPlayer.track,
        isTrackPlaying: trackPlayer.isTrackPlaying,
        playTrack: playTrack,
        pauseTrack: pauseTrack,
        // for single,
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
