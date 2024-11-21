import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Contact from './components/Nav/Contact/Contact';
import Insurance from './components/Nav/Insurance/Insurance';
import Nav from './components/Nav/Nav';
import Programs from './components/Nav/Programs/Programs';
import Treatment from './components/Nav/Treatment/Treatment';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
    <div className="app-container">
      <title>Aura Wellness</title>
      <Header />
      <Nav />
      <Routes>
        <Route path="/programs" element={<Programs />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
};

export default App;
