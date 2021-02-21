import React from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import BanIcon from '../../../assets/images/ban-icon.png'

SwiperCore.use([Autoplay])

const DefectSwiper = (): JSX.Element => {
  const defectLsit = [
    '方法传统',
    '技术落后',
    '污染严重',
    '资源浪费',
    '不易监管',
    '食品安全'
  ]

  return (
    <div className="w-8/12 bg-white shadow-md p-10 rounded-xl relative overflow-hidden">
      <div
        className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center"
        style={{
          backgroundImage:
            'linear-gradient(90deg,#FFFFFF 5%,transparent,#FFFFFF 95%)'
        }}
      >
        <img src={BanIcon} className="absolute w-2/12 z-10" />
      </div>
      <Swiper
        className="w-full"
        spaceBetween={50}
        slidesPerView={5}
        autoplay={{
          disableOnInteraction: false
        }}
        loop={true}
      >
        {defectLsit.map((text, index) => (
          <SwiperSlide key={index}>
            <div className="h-40 flex flex-col w-full items-center justify-center">
              <h1 className="text-3xl">{text.slice(0, 2)}</h1>
              <h1 className="text-3xl">{text.slice(-2)}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default DefectSwiper
