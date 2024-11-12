import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import SoftwareDevelopment from './components/Nav/SoftwareDevelopment/SoftwareDevelopment';
import CyberSecurity from './components/Nav/CyberSecurity/CyberSecurity';
import Art from './components/Nav/Art/Art'
import GraphicDesign from './components/Nav/Graphic Design/GraphicDesign';

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <h1> App </h1>
      <Routes>
        <Route path="/software-engineer" element={<SoftwareDevelopment />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/art" element={<Art />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
      </Routes>
    </Router>
  );
};

export default App;
