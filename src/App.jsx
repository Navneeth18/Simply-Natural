
import './App.css'

import Home from './components/Home'
import Plants from './components/Plants'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {


  return (
    <div className="" style={{backgroundColor:"#fafafa"}}>
      <div className="" style={{ position: "fixed" }}><Navbar /></div>

      <section id="home">
        <Home />
      </section>

      <section id="store">
        <Plants />
      </section>

      <section id="about-us">
        <Footer />
      </section>



    </div>
  )
}

export default App
