import React from "react"
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image"

import IconPlay from "../../images/single_play_btn.svg"
import IconPause from "../../images/pause-music.svg"

const SigleCard = ({
  name,
  image,
  visibly,
  isPlaying,
  playSingle,
  pauseSingle,
}) => {
  return (
    visibly && (
      <div className="single-card_wrapper">
        <div className="single-card">
          <img src={image} alt="" className="single-card-img" />
          <div
            className="single-card_overlay"
            onClick={isPlaying ? pauseSingle : playSingle}
          >
            {isPlaying ? (
              <img
                src={IconPause}
                className="single-card_overlay-play-btn"
                alt="pause"
              />
            ) : (
              <img
                src={IconPlay}
                className="single-card_overlay-play-btn"
                alt="play"
              />
            )}
          </div>
        </div>
        {/* track name */}
        <p className="links">{name}</p>
      </div>
    )
  )
}
export default SigleCard
