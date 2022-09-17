import React, { useEffect, useState } from 'react'
import './OurValues.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import {
  ContainerCalidez,
  ContainerEmpatia,
  Containerinnovacion,
} from './Carrousel/Carrousel'

const OurValues = () => {
  const [swiper, setSwiper] = useState()

  // useEffect(() => {
  //   setInterval(() => {
  //     swiper?.slideNext()
  //   }, 20000)
  // }, [swiper])
  console.log(swiper)

  return (
    <div className="our-Values">
      <div className="my-[70px] flex justify-between">
        <h3>Nuestros valores</h3>
        <div className="flex">
          <button
            className="font-bold text-[20px] sm:text-[30px] mr-[5px] sm:mr-[10px]"
            onClick={() => {
              swiper.slidePrev()
            }}
          >
            {'<'}
          </button>
          <button
            className="font-bold text-[20px] sm:text-[30px] ml-[5px] sm:ml-[10px]"
            onClick={() => {
              swiper.slideNext()
            }}
          >
            {'>'}
          </button>
        </div>
      </div>

      <section className="mb-[80px]">
        <Swiper
          loop
          spaceBetween={80}
          slidesPerView="auto"
          onSlideChange={(e) => console.log(e)}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          <SwiperSlide className="w-[90%] sm:!w-[450px]">
            <ContainerCalidez />
          </SwiperSlide>
          <SwiperSlide className="w-[90%] sm:!w-[450px]">
            {' '}
            <ContainerEmpatia />
          </SwiperSlide>
          <SwiperSlide className="w-[90%] sm:!w-[450px]">
            {' '}
            <Containerinnovacion />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  )
}

export default OurValues
