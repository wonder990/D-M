import './App.css'
import Carrousel from './components/Carrousel/Carrousel'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Header from './components/header/Header'
import Info from './components/Inicio/Info/Info'
import Inicio from './components/Inicio/Inicio'
import './components/Inicio/Inicio.css'
import OurValues from './components/Inicio/OurValues/OurValues'
import Nosotros from './components/Nosotros/Nosotros'
import Solutions from './components/Solutions/Solutions'

function App() {
  return (
    <div className="contaeiner-body">
      <div className="container-inicio">
        <Header />
        <Inicio />
        <Info />
        <OurValues />
        <Solutions />
        <Nosotros />
        <Carrousel />
        <Form />
        <Footer />
      </div>
    </div>
  )
}

export default App
