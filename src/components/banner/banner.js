import React from "react"
import Ticker from "react-ticker"

const Banner = ({ content, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <div className="banner">
      <Ticker offset="run-in" speed={10} height={32}>
        {() => <h4>{content}</h4>}
      </Ticker>
    </div>
  </a>
)
export default Banner
