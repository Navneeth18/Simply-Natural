
import './App.css'

import Home from './components/Home'
import Plants from './components/Plants'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {


  return (
    <div className="">
      <div className="" style={{ position: "absolute" }}><Navbar /></div>

      <section id="home">
        <Home />
      </section>

      <secction id="store">
        <Plants />
      </secction>

      <secction id="about-us">
        <Footer />
      </secction>



    </div>
  )
}

export default App
