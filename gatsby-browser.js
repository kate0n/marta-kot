/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/index.scss"

import React from "react"
import { MusicPlayerProvider } from "./src/context/MusicPlayerContext"

export const wrapRootElement = ({ element }) => (
  <MusicPlayerProvider>{element}</MusicPlayerProvider>
)

if (typeof document !== `undefined`) {
  const el = document.createElement("audio")
  el.id = "audio"
  !document.getElementById("audio") && document.body.appendChild(el)
}
