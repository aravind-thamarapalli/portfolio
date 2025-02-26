import { Routes, Route } from 'react-router-dom';
import './App.css';

import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
