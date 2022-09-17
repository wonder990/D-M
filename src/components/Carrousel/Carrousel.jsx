import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import './Carrousel.css'

const Carrousel = () => {
  const [swiper, setSwiper] = useState(0)

  // useEffect(() => {
  //   setInterval(() => {
  //     swiper?.slideNext()
  //   }, 20000)
  // }, [swiper])
  console.log(swiper)
  return (
    <div className="container-questions">
      <div className="my-[70px] flex justify-between">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide className="!w-[full]">
            <Cont1 />
          </SwiperSlide>
          <SwiperSlide className="!w-[full]">
            <Cont2 />
          </SwiperSlide>
          <SwiperSlide className="!w-[full]">
            <Cont3 />
          </SwiperSlide>
          <SwiperSlide className="!w-[full]">
            <Cont4 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Carrousel

const Cont1 = () => {
  return (
    <div className="box-carrousel">
      <p>
        ¿Querés alcanzar <br /> nuevas metas?
      </p>
      <img src="./images/ayuda.png" alt="" />
    </div>
  )
}
const Cont2 = () => {
  return (
    <div className="box-carrousel">
      <p>
        ¿Buscas un aumento <br /> en la productividad?
      </p>
      <img src="./images/goal.png" alt="" />
    </div>
  )
}
const Cont3 = () => {
  return (
    <div className="box-carrousel">
      <p>
        ¿Necesitas alinear la <br />
        visión de tu equipo?
      </p>
      <img src="/images/charla.png" alt="" />
    </div>
  )
}
const Cont4 = () => {
  return (
    <div className="box-carrousel">
      <div>
        <h3 className="mb-[30px]">¡Elevá tus resultados!</h3>
        <p className="!text-[30px]">
          El primer paso es conocernos, <br /> ponete en contacto{' '}
        </p>
      </div>
      <img src="/images/Live collaboration-cuate 1.png" alt="" />
    </div>
  )
}
