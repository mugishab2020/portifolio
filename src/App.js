import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-gray-800 min-h-screen text-white">
        <Navbar />
        <main className="p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
