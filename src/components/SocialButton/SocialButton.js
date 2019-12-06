import React from "react"

const SocialButton = (
  {
    url,
    image,
    title,
    hoverIcon,
  }
) => {
  return (
    <a
      aria-label="social media link"
      className="social_button"
      target={"_blank"}
      rel="noopener"
      href={url}
    >
      {
        image && image.url &&
        <img className={'social_button-idle-img'} src={image.url} alt={title || 'social media logo'}/>
      }
      {
        hoverIcon && hoverIcon.url &&
        <img className={'social_button-hover-img'} src={hoverIcon.url} alt={title || 'social media logo'}/>
      }
      {
        !hoverIcon && image.url &&
        <img className={'social_button-hover-img'} src={image.url} alt={title || 'social media logo'}/>
      }
    </a>
  )
}

export default SocialButton
