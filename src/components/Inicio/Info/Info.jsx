import React from 'react'
import './Info.css'

const Info = () => {
  return (
    <section className="section-presentation">
      <article className="present">
        <p className="p1">
          Creemos en la <b>persona como fuente de poder</b> y también{' '}
          <b>que el acompañamiento es clave</b> para que la evolución sea
          sostenida.
        </p>
        <p className="p2">
          Basados en la escucha profunda, nos enfocamos en comprender la
          inquietud que subyace al contexto, para aportar soluciones
          innovadoras.
        </p>
      </article>
      <article className="question">
        <h3>¿Para qué lo hacemos?</h3>
        <p>
          Nuestra visión es <b>ser y hacerte parte de la revolución cultural</b>{' '}
          que ya se está dando.
        </p>
      </article>
    </section>
  )
}

export default Info
