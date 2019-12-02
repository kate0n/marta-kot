import React from "react"
import { Link } from "gatsby"

const NextPageBlock = ({ link, title }) => (
  <>
    <Link to={link} className="next-page">
      <p className="links">Далее</p>
      <h1 className="title_h1">{title}</h1>
    </Link>
    <p className="copyright text">
      2019 © Марта Кот. Сделано в{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://expanse.systems/"
      >
        EXPANSE
      </a>
    </p>
  </>
)

export default NextPageBlock
