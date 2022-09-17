import React, { useState } from 'react'
import './Carrousel.css'

// Import Swiper React components

// Import Swiper styles

export const ContainerCalidez = () => {
  return (
    <article className="card-container">
      <img className="w-[158px]" src="./images/Group 3928.png" alt="" />
      <div className="card h-1/2">
        <h3>Calidez</h3>
        <p>
          El contexto facilita o detrae el cambio, velamos por crear un espacio
          de confianza donde la tranformación tenga lugar.
        </p>
      </div>
    </article>
  )
}
export const ContainerEmpatia = () => {
  return (
    <article className="card-container">
      <img className="w-[158px]" src="./images/Group 3929 (1).png" alt="" />
      <div className="card h-1/2">
        <h3>Empatía</h3>
        <p>
          Reconocemos al otro como legítimo y desde esa comprensión operamos.
        </p>
      </div>
    </article>
  )
}
export const Containerinnovacion = () => {
  return (
    <article className="card-container">
      <img className="w-[158px]" src="./images/Group 3930.png" alt="" />
      <div className="card h-[50%]">
        <h3>Innovación</h3>
        <p>
          Creatividad en acción y movimiento constante, para encontrar el cambio
          en el hacer. No hay innovación sin evolución.
        </p>
      </div>
    </article>
  )
}
