import React from "react"
import IconPlay from "../../images/single_play_btn.svg"
import IconPause from "../../images/music_pause.svg"

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
            <img
              src={IconPlay}
              className="single-card_overlay-play-btn"
              alt="play"
            />
          </div>
        </div>
        {/* track name */}
        <p className="links">{name}</p>
      </div>
    )
  )
}
export default SigleCard
