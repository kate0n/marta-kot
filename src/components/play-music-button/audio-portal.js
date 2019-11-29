import React, { useEffect } from "react"
import ReactDOM from "react-dom"

// Use a ternary operator to make sure that the document object is defined
const portalRoot =
  typeof document !== `undefined` ? document.getElementById("portal") : null

// track по умолчанию передается из layout.js (там берется из контекста)
const AudioPortal = ({ track }) => {
  const containerEl =
    typeof document !== `undefined` ? document.createElement("div") : null

  useEffect(() => {
    portalRoot.appendChild(containerEl)
    return () => portalRoot.removeChild(containerEl)
  })

  return containerEl
    ? ReactDOM.createPortal(
        <audio src={track} type="audio/mpeg" id="audio"></audio>,
        containerEl
      )
    : null
}

export default AudioPortal
