import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ProjectTab from "./pages/ProjectTab";
import PageWrapper from "./components/PageWrapper"; // Import wrapper
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutMe /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/project" element={<PageWrapper><ProjectTab /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
