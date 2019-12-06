import React from "react"
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image"

const ResponsiveImageBackground = ({ bg }) => {
  if (!bg) {
    return null
  }
  return (
    <ResponsiveImage>
      <ResponsiveImageSize
        alt={"background"}
        minWidth={0}
        path={bg.sm && bg.sm.url}
      />
      <ResponsiveImageSize
        alt={"background"}
        minWidth={768}
        path={bg.sm && bg.sm.url}
      />
      <ResponsiveImageSize
        alt={"background"}
        default
        minWidth={1024}
        path={bg.md && bg.md.url}
      />
      <ResponsiveImageSize
        alt={"background"}
        minWidth={1440}
        path={bg.lg && bg.lg.url}
      />
    </ResponsiveImage>
  )
}

export default ResponsiveImageBackground
