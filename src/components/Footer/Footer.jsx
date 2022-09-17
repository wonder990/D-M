import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="content-footer">
        <h2 className="py-[10px]">D&N</h2>
        <p className="font-semibold">Daiana Deza</p>
        <p className="font-semibold">Nicolás Gabriel Gómez</p>
        <p className="py-[10px] font-light text-[14px]">
          Facilitacion de espacios de aprendizaje y transformación para líderes
          y equipos de trabajo.
        </p>
      </div>
      <p className="bottom-5 left-[10%] sm:left-[40%] mx-auto absolute font-medium">
        © 2022 D&N. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer
