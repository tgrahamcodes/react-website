import React from 'react';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Programs from './components/Nav/Programs/Programs';
import Treatment from './components/Nav/Treatment/Treatment';
import Insurance from './components/Nav/Insurance/Insurance';
import Contact from './components/Nav/Contact/Contact';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Nav />
      <Routes>

        <Route path="/programs" element={<Programs />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
