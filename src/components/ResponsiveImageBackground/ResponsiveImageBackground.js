import React from "react"
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image"

const ResponsiveImageBackground = ({ bg }) => {
  if (!bg) {
    return null
  }
  return (
    <ResponsiveImage>
      <ResponsiveImageSize minWidth={0} path={bg.xs && bg.xs.url} />
      <ResponsiveImageSize minWidth={768} path={bg.sm && bg.sm.url} />
      <ResponsiveImageSize default minWidth={1024} path={bg.md && bg.md.url} />
      <ResponsiveImageSize minWidth={1440} path={bg.lg && bg.lg.url} />
    </ResponsiveImage>
  )
}

export default ResponsiveImageBackground
