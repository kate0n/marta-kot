import React from "react"
import Ticker from "react-ticker"

const Banner = ({ content, visibly }) =>
  visibly && (
    <div className="banner">
      <Ticker offset="run-in" speed={10} height={32}>
        {() => <h4>{content}</h4>}
      </Ticker>
    </div>
  )
export default Banner
