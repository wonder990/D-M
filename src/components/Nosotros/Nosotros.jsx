import React from 'react'
import './Nosotros.css'

const Nosotros = () => {
  return (
    <div id="nosotros" className="container-nosotros">
      <div className="cards-nosotros">
        <h2>Nosotros</h2>
        <section className="card-us">
          <article className="relative cards-1">
            <a
              href="https://www.linkedin.com/company/d%C2%B7y%C2%B7n/about/"
              target="_blanck"
            >
              <img
                className="absolute right-[30px] top-[30px]"
                src="./images/iconLinkedin.png"
                alt=""
              />
            </a>
            <div className="daiana-img">
              <img className="w-[280px]" src="./images/Daiana.png" alt="" />
            </div>
            <div className="daiana-description">
              <h2>Daiana Deza</h2>
              <p className="description">
                Amorosa, simpática, sincera, emocional, divertida y observadora.
              </p>
              <p className="p-daiana">
                Me motivan los desafíos y el constante desarrollo personal y
                profesional. Esto me impulsa a seguir capacitándome y a explorar
                nuevas vías de ser para trabajar en mi mejor versión.{' '}
              </p>
              <p className="p-daiana2">
                Actualmente disfruto mucho analizar organizaciones, a fin de
                aportar soluciones en pos de un equilibrio entre la visión y
                misión de la empresa y las personas que hacen parte de ella.
              </p>
            </div>
          </article>
          <article className="cards-1">
            <a href="https://www.linkedin.com/in/nggomez/" target="_blanck">
              <img
                className="absolute right-[30px] top-[30px]"
                src="./images/iconLinkedin.png"
                alt=""
              />
            </a>
            <div className="nico-img">
              <img className="w-[280px]" src="./images/Nico.png" alt="" />
            </div>
            <div className="nico-description">
              <h2>Nicolás Gabriel Gómez</h2>
              <p className="description">
                Estudiante eterno, fanático del crecimiento y el desarrollo
                humano.
              </p>
              <p className="p-daiana">
                Me gusta detenerme a observar, detectar oportunidades de mejora
                y hacer preguntas poderosas, que despierten reflexión.
              </p>
              <p className="p-daiana2">
                El fortalecimiento de personas en equipos, la comunicación y el
                desarrollo de la cultura organizacional son mis motivadores
                profesionales, aunque también podés encontrarme trabajando en mi
                huerta o cocinando para amigos.
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Nosotros
