import { Routes, Route } from 'react-router-dom';
import './App.css';

import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ProjectTab from './pages/ProjectTab';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project" element={<ProjectTab />} />
      </Routes>
    </>
  );
}

export default App;
