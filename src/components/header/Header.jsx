import React, { useState } from 'react'
import '../header/header.css'

const Header = () => {
  const [linkActive, setlinkActive] = useState()
  const [buttonActive, setbuttonActive] = useState(false)
  console.log(buttonActive)
  return (
    <header className="header-inicio ">
      <h2 className="logo">D&N</h2>
      <ul
        className={
          buttonActive
            ? 'pr-0 duration-300 bg-[#FAFAFA] lg:bg-inherit w-full flex justify-center items-center flex-col absolute top-[80px] lg:relative lg:flex lg:justify-center lg:items-center lg:top-0 lg:flex-row lg:pr-[150px] lg:w-auto'
            : 'pr-0 duration-300 -top-[500px] lg:bg-inherit absolute w-full flex justify-center items-center flex-col lg:relative lg:flex lg:justify-center lg:items-center lg:top-0 lg:flex-row lg:pr-[150px] lg:w-auto'
        }
      >
        <li>
          <a
            onClick={() => {
              setbuttonActive(false)
              setlinkActive('Inicio')
            }}
            className={linkActive == 'Inicio' ? 'active-Link' : 'inactive-Link'}
            href="#Inicio"
          >
            Inicio
          </a>
        </li>
        <li className="link-l">
          <a
            onClick={() => {
              setbuttonActive(false)
              setlinkActive('Soluciones')
            }}
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
            onClick={() => {
              setbuttonActive(false)
              setlinkActive('Nosotros')
            }}
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
            onClick={() => {
              setbuttonActive(false)
              setlinkActive('Contacto')
            }}
            className={
              linkActive == 'Contacto' ? 'active-Link' : 'inactive-Link'
            }
            href="#Form"
          >
            Contacto
          </a>
        </li>
      </ul>
      <button
        className="z-30 lg:hidden"
        onClick={() => {
          setbuttonActive(!buttonActive)
        }}
      >
        {buttonActive ? (
          <i className="text-[30px] fa-solid fa-xmark"></i>
        ) : (
          <i className="text-[30px] fa-solid fa-bars"></i>
        )}
      </button>
    </header>
  )
}

export default Header
