import React, { useContext } from "react"
import Header from "./header/header"
import AudioPortal from "./play-music-button/audio-portal"
import MusicPlayerContext from "../context/MusicPlayerContext"

const Layout = ({ children }) => {
  const { track, single } = useContext(MusicPlayerContext)
  return (
    <div className="outer-container">
      <Header />
      <main>{children}</main>
      <AudioPortal track={single || track} />
    </div>
  )
}

export default Layout
