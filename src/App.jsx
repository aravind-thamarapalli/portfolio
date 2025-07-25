import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ProjectTab from "./pages/ProjectTab";
import PageWrapper from "./components/PageWrapper";
import LoadingPage from "./components/LoadingPage";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import BlogPage2 from "./pages/BlogPage2";
import BlogPage3 from "./pages/BlogPage3";
import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 100); // Show loading for 1.5 sec
    };

    handleRouteChange();
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingPage key="loading" />
      ) : (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper direction={1}><Hero /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper direction={1}><AboutMe /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper direction={1}><Projects /></PageWrapper>} />
          <Route path="/project" element={<PageWrapper direction={1}><ProjectTab /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper direction={1}><Blog/></PageWrapper>} />
          <Route path="/blogpage1" element={<PageWrapper direction={1}><BlogPage /></PageWrapper>} />
          <Route path="/blogpage2" element={<PageWrapper direction={1}><BlogPage2 /></PageWrapper>} />
          <Route path="/blogpage3" element={<PageWrapper direction={1}><BlogPage3 /></PageWrapper>} />
        </Routes>
      )}
    </AnimatePresence>
  );
}

export default App;
