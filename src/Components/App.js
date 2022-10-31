import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "../style.css";

import Navbar from "./Navbar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
