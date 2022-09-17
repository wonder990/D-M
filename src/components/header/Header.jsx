import React, { useState } from 'react'
import '../header/header.css'

const Header = () => {
  const [linkActive, setlinkActive] = useState()
  return (
    <header className="header-inicio">
      <h2 className="logo">D&N</h2>
      <ul>
        <li>
          <a
            onClick={() => setlinkActive('Inicio')}
            className={linkActive == 'Inicio' ? 'active-Link' : 'inactive-Link'}
            href="#Inicio"
          >
            Inicio
          </a>
        </li>
        <li className="link-l">
          <a
            onClick={() => setlinkActive('Soluciones')}
            className={
              linkActive == 'Soluciones' ? 'active-Link' : 'inactive-Link'
            }
            href="#solutions"
          >
            Soluciones
          </a>
        </li>
        <li className="link-r">
          <a
            onClick={() => setlinkActive('Nosotros')}
            className={
              linkActive == 'Nosotros' ? 'active-Link' : 'inactive-Link'
            }
            href="#nosotros"
          >
            Nosotros
          </a>
        </li>
        <li>
          <a
            onClick={() => setlinkActive('Contacto')}
            className={
              linkActive == 'Contacto' ? 'active-Link' : 'inactive-Link'
            }
            href="#Form"
          >
            Contacto
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
