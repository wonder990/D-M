import React from 'react'
import './Forms.css'

const Form = () => {
  return (
    <div id="Form" className="form-container">
      <h2 className="my-[20px] mx-[50px]">¡Hablemos!</h2>
      <div className="flex flex-col lg:flex-row w-full p-[50px] justify-between">
        <section className="presentation-form w-[100%] lg:w-[45%]">
          <p>
            Nos encantan las preguntas y las propuestas desafiantes, ¡contanos
            la tuya!
          </p>
          <img
            className="mx-auto mt-[150px] mb-[80px]"
            src="./images/logo-form.png"
            alt=""
          />
          <div>
            <h3 className="conocenosmas">Conocenos más</h3>
            <div className="flex flex-col sm:flex-row container-links justify-around pr-[20px]">
              <a
                target="_blanck"
                href="https://www.instagram.com/dyn.consulting/"
                className="flex links items-center py-[10px]"
              >
                <img
                  className="px-[20px]"
                  src="./images/Instragram.png"
                  alt=""
                />
                Instagram
              </a>
              <a
                target="_blanck"
                href="https://www.linkedin.com/company/d%C2%B7y%C2%B7n/about/"
                className="flex links items-center py-[10px]"
              >
                <img className="px-[20px]" src="./images/Linkedin.png" alt="" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
        <form
          className="flex flex-col form w-[100%] lg:w-[45%] py-[100px] lg:py-0 px-[0] lg:px-[100px] mx-auto"
          action="https://formsubmit.co/nicolasgabrielgomez@gmail.com"
          method="POST"
        >
          <label className="label-form" htmlFor="Nombre">
            Nombre completo
          </label>
          <input
            required
            className="input-normal"
            id="Nombre"
            type="text"
            name="Nombre"
          />
          <label className="label-form" htmlFor="email">
            Correo electrónico
          </label>
          <input
            required
            className="input-normal"
            id="email"
            type="email"
            name="Correo"
          />
          <label className="label-form" htmlFor="phone">
            Número de telefono
          </label>
          <input
            required
            className="input-normal"
            id="phone"
            type="number"
            name="Numero de teléfono"
          />
          <label className="label-form" htmlFor="message">
            Mensaje
          </label>
          <input
            required
            className="textarea"
            id="message"
            type="text"
            name="Mensaje"
          />
          <input className="submit" type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  )
}

export default Form
