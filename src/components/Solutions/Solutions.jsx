import React from 'react'
import './Solutions.css'

const Solutions = () => {
  return (
    <section id="solutions" className="container-solutions">
      <h2>Soluciones</h2>
      <div className="container-article">
        <article className="article-1">
          <h4>¿Qué hacemos?</h4>
          <p>
            Facilitamos espacios de aprendizaje y transformación para líderes y
            equipos de trabajo.
          </p>
          <h4>¿Cómo lo hacemos?</h4>
          <p>Conversamos con vos para entender los puntos de mejora.</p>
          <p>
            {' '}
            Desarrollamos espacios (físicos o virtuales) contemplando el
            contexto y las necesidades particulares de tu equipo.
          </p>
          <p>
            {' '}
            Elaboramos un reporte en base a nuestra pericia y lo validamos con
            vos para seguir mejorando.
          </p>
        </article>
        <article className="article-2">
          <p>
            Contamos con algunas titulaciones, pero nos apalancamos de nuestra
            experiencia como formadores y gestores del cambio. Nuestra mejor
            validación son las devoluciones que recibimos de las personas con
            las que interactuamos.
          </p>
          <p>
            ¿Tenés dudas? ¡Agendemos un espacio y conversemos para conocernos!{' '}
          </p>
          <img
            className="w-[274px] mt-[30px]"
            src="./images/cuate.png"
            alt=""
          />
          <button>
            <a href="#Form">Contacto</a>
          </button>
        </article>
      </div>
    </section>
  )
}

export default Solutions
