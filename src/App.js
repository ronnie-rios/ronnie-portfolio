import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Bio from "./Components/Bio";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Routes>
          <Route path='/' element={<About/>} />
          <Route path='/bio' element={<Bio />} />
        </Routes>
        
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </Router>
  );
}
