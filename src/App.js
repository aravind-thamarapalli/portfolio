import './App.css';
import { Routes, Route} from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/hero" element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
