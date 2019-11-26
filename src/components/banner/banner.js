import React from "react"
import Ticker from "react-ticker"

const Banner = ({ content, visibly }) => (
  <div className='banner'>
  <Ticker offset="run-in" speed={10} height={32}>
    {({content}) =>
      <h4 className="title-h4">22.10.2019 — Москва, «Флакон», МосВегФест 2019 • 22.10.2019 — Москва, «Флакон», МосВегФест 2019 • 22.10.2019 Москва, «Флакон», МосВегФест 2019 • </h4>
    }
  </Ticker>
  </div>
)
export default Banner
