import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cv from './components/cv/Cv';
import Hero from './components/hero/Hero';
import Navbar from "./components/navbar/Navbar"
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import { useState } from 'react';
import Footer from './components/footer/Footer';
import ProjectDetails from './components/projects/details/ProjectDetails';

function App() {
  const [colorMode, setColorMode] = useState("dark")
  const handleColorMode = () => {
    setColorMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div className={`App ${colorMode}`}>
      <Navbar handleColorMode={handleColorMode} colorMode={colorMode}/>
      <Routes>
        <Route path='/' element={
          <>
            <Hero/>
            <Projects/>
            <Cv/>
            <Contact/>
          </>
        }/>
        <Route path='/project/details' element={<ProjectDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
