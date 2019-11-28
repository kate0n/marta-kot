import React from "react"
import IconPlay from "../../images/single_play_btn.svg"
import IconPause from "../../images/music_pause.svg"

const SigleCard = ({
  name,
  image,
  visibly,
  isSinglePlaying,
  playSingle,
  pauseSingle,
}) => {
  return (
    visibly && (
      <div className="single-card-wrapper">
        <div className="single-card">
          {/* single image */}
          <div className="single-card-img-wrapper">
            <img src={image} alt="" className="single-card-img" />
          </div>

          {/* overlay with play btn */}
          <div
            className="single-card_overlay"
            onClick={isSinglePlaying ? pauseSingle : playSingle}
          >
            {isSinglePlaying ? (
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
