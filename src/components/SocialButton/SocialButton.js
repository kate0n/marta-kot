import React from "react"

const SocialButton = (
  {
    url,
    image,
    hoverIcon,
  }
) => {
  return (
    <a
      className="social_button"
      target={"_blank"}
      rel="noopener"
      href={url}
    >
      {
        image && image.url &&
        <img className={'social_button-idle-img'} src={image.url} alt=""/>
      }
      {
        hoverIcon && hoverIcon.url &&
        <img className={'social_button-hover-img'} src={hoverIcon.url} alt=""/>
      }
      {
        !hoverIcon && image.url &&
        <img className={'social_button-hover-img'} src={image.url} alt=""/>
      }
    </a>
  )
}

export default SocialButton
