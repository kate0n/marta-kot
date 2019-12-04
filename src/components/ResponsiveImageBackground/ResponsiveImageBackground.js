import React from "react"
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image"

const ResponsiveImageBackground = ({ bg }) => {
  if(!bg){
    return null;
  }
  return (
    <ResponsiveImage>
      <ResponsiveImageSize default minWidth={0} path={bg.xs && bg.xs.url} />
      <ResponsiveImageSize minWidth={1024} path={bg.sm && bg.sm.url} />
      <ResponsiveImageSize minWidth={1440} path={bg.md && bg.md.url} />
      <ResponsiveImageSize minWidth={1600} path={bg.lg && bg.lg.url} />
    </ResponsiveImage>
  )
}

{
  /* <ResponsiveImageSize default minWidth={0} path={bg.xs.url} />
<ResponsiveImageSize minWidth={1024} path={bg.sm.url} />
<ResponsiveImageSize minWidth={1440} path={bg.md.url} />
<ResponsiveImageSize minWidth={1600} path={bg.lg.url} /> */
}

export default ResponsiveImageBackground
