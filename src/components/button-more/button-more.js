import React from "react"

const ButtonMore = ({ title, moreUrl }) => (
  <div className="button_wrapper">
    <button className="button links">
      <a href={moreUrl} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </button>
  </div>
)

export default ButtonMore
