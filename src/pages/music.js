import React, { useContext } from "react"
import Layout from "../components/layout"
import PageTitle from "../components/page-title/page-title"
import SingleCard from "../components/single-card/single-card"
import ButtonMore from "../components/button-more/button-more"
import PageFooter from "../components/footer/page-footer"
import MusicPlayerContext from "../context/MusicPlayerContext"
import SingleImage from "../images/single_image.png"
import NextPageBlock from "../components/next-page-block/next-page-block"

const musicPage = {
  singles: [
    {
      name: "Не принц",
      image: SingleImage,
      track: "http://www.alexkatz.me/codepen/music/interlude.mp3",
      visibly: true,
    },
    {
      name: "Не принц",
      image: SingleImage,
      track: "http://www.alexkatz.me/codepen/music/interlude.mp",
      visibly: true,
    },
    {
      name: "Не принц",
      image: SingleImage,
      track: "http://www.alexkatz.me/codepen/music/interlude.mp3",
      visibly: true,
    },
    {
      name: "Не принц",
      image: SingleImage,
      track: "http://www.alexkatz.me/codepen/music/interlude.mp3",
      visibly: true,
    },
    {
      name: "Не принц",
      image: SingleImage,
      track: "http://www.alexkatz.me/codepen/music/interlude.mp3",
      visibly: true,
    },
    {
      name: "Не принц",
      image: SingleImage,
      track: "http://www.alexkatz.me/codepen/music/interlude.mp3",
      visibly: true,
    },
  ],
  background: "",
  moreMusicUrl: "",
}

const MusicPage = () => {
  const { isSinglePlaying, single, playSingle, pauseSingle } = useContext(
    MusicPlayerContext
  )
  return (
    <Layout>
      <div className="inner-container">
        <PageTitle title="Музыка" />
        <div className="music">
          {musicPage.singles.map((singleItem, index) => (
            <SingleCard
              {...singleItem}
              // чтобы иконка play/pause менялась только на карточке с выбранным синглом
              isSinglePlaying={
                singleItem.track === single ? isSinglePlaying : false
              }
              // вызываем меняем playSingle():
              //isSinglePlaying на true, isTrackPlaying на false (если играл дефолтный трек)
              // в play-music-button.js вызывается ф-я playTrack с ref и флагом true, о
              // значающим, что надо включить сингл, а не дефолтный трек
              playSingle={() => playSingle(single.track)}
              // меняем isSinglePlaying на false, меняем isTrackPlaying на false (если играл дефолтный трек)
              pauseSingle={() => pauseSingle()}
              key={index}
            />
          ))}
        </div>
        <ButtonMore title="Больше музыки" moreUrl={musicPage.moreMusicUrl} />
        <NextPageBlock link="/contacts" title="Контакты" />
      </div>
      <PageFooter />
    </Layout>
  )
}

export default MusicPage
