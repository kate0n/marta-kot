import React from "react"
import Header from "./header/header"
import AudioPortal from "./play-music-button/audio-portal"
import MusicPlayerContext from "../context/MusicPlayerContext"

const Layout = ({ children }) => {
  return (
    <MusicPlayerContext.Consumer>
      {context => (
        <div className="outer-container">
          <Header />
          <main>{children}</main>
          <AudioPortal track={context.single || context.track} />
        </div>
      )}
    </MusicPlayerContext.Consumer>
  )
}

export default Layout
