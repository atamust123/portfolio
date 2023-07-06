import './App.css'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'
import { NavBar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
