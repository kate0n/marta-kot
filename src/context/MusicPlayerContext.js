import React, { useEffect, useState } from "react"
import { useFetch } from "use-http"

const MusicPlayerContext = React.createContext()
export const QUERY = `
    {
      getHomePage{
          track{
            url
          }
      }
    }
`

const useMusicState = ({ currentTime = 0 }) =>
  useState({
    isSinglePlaying: false,
    single: "",
    currentTime: currentTime,
  })

const MusicPlayerProvider = ({ children, data, graphql }) => {
  const [trackPlayer, setTrackPlayer] = useState({
    isTrackPlaying: false,
    track: "https://www.milannohejl.cz/subdom/codepen/Shantifax-KukuPuja.mp3",
    currentTime: 0,
  })

  const request = useFetch({
    url: "/graphql",
    // mode: 'cors'
  })

  // useEffect(() => {
  //   const defaultTrack = request.query(QUERY).then(({ data }) => {
  //     if (data) {
  //       setTrackPlayer({
  //         ...trackPlayer,
  //         track: data.getHomePage.track.url,
  //       })
  //     }
  //   })
  // }, [])

  const [singlePlayer, setSinglePlayer] = useMusicState({})

  let audio

  try {
    audio =
      typeof document !== "undefined" ? document.getElementById("audio") : null
  } catch (e) {
    console.log(e)
  }

  const playTrack = () => {
    setTrackPlayer({
      ...trackPlayer,
      isTrackPlaying: true,
    })
    setSinglePlayer({
      ...singlePlayer,
      isSinglePlaying: true,
    })

    if (singlePlayer.single) {
      audio.src = singlePlayer.single
      audio.currentTime = singlePlayer.currentTime
    } else {
      audio.src = trackPlayer.track
      audio.currentTime = trackPlayer.currentTime
    }
    audio.play()
  }

  const pauseTrack = () => {
    setTrackPlayer({
      ...trackPlayer,
      isTrackPlaying: false,
      currentTime: audio.currentTime,
    })
    setSinglePlayer({
      ...singlePlayer,
      isSinglePlaying: false,
      currentTime: audio.currentTime,
    })
    audio.pause()
  }

  const playSingle = single => {
    // debugger
    setTrackPlayer({
      ...trackPlayer,
      isTrackPlaying: false,
    })
    setSinglePlayer({
      isSinglePlaying: true,
      single: single,
    })
    //
    audio.src = single
    single === singlePlayer.single
      ? (audio.currentTime = Math.round(singlePlayer.currentTime))
      : (audio.currentTime = 0)
    audio.play()
  }

  const pauseSingle = () => {
    // debugger
    setSinglePlayer({
      ...singlePlayer,
      isSinglePlaying: false,
      currentTime: audio.currentTime,
    })
    audio.pause()
  }

  return (
    <MusicPlayerContext.Provider
      value={{
        // for track,
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
