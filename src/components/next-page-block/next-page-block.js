import React from "react"
import { Link } from "gatsby"

const NextPageBlock = ({ link, title }) => (
  <div className="next-page">
    <Link to={link}>
      <p className="links">Далее</p>
      <h1 className="title_h1">{title}</h1>
    </Link>
  </div>
)

export default NextPageBlock
