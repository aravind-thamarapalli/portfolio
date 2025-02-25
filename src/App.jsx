import './App.css'
import { Routes, Route } from 'react-router-dom'
import Hero from './pages/Hero'
import AboutMe from './pages/AboutMe'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </>
  )
}

export default App
