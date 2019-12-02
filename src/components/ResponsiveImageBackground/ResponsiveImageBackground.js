import React from "react"
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image"

const ResponsiveImageBackground = () => {
  return (
    <ResponsiveImage>
      <ResponsiveImageSize
        default
        minWidth={0}
        path={'/images/homepage-bg-768.jpg'}
      />
      <ResponsiveImageSize
        minWidth={1024}
        path={'/images/homepage-bg-1024.jpg'}
      />
      <ResponsiveImageSize
        minWidth={1440}
        path={'/images/homepage-bg-1440.jpg'}
      />
      <ResponsiveImageSize
        minWidth={1600}
        path={'/images/homepage-bg-fullsize.jpg'}
      />
    </ResponsiveImage>
  )
}

export default ResponsiveImageBackground
