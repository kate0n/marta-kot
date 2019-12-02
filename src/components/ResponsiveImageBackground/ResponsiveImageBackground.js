import React from "react"
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image"

const ResponsiveImageBackground = ({ bg }) => {
  return (
    <ResponsiveImage>
      <ResponsiveImageSize default minWidth={0} path={bg.xs} />
      <ResponsiveImageSize minWidth={1024} path={bg.sm} />
      <ResponsiveImageSize minWidth={1440} path={bg.md} />
      <ResponsiveImageSize minWidth={1600} path={bg.lg} />
    </ResponsiveImage>
  )
}

export default ResponsiveImageBackground
