import React, { useState } from 'react'
import Header from '../header/Header'
import '../Inicio/Inicio.css'

const Inicio = () => {
  const [linkActive, setlinkActive] = useState()
  console.log(linkActive)
  return (
    <main id="Inicio" className="presentation">
      <h2>Transformá la forma en la que tu equipo se relaciona</h2>
      <p>Trabajemos en el cambio que estás buscando.</p>
      <a href="#Form">Eleva tus resultados</a>
    </main>
  )
}

export default Inicio
