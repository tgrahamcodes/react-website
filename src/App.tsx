import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import SoftwareDevelopment from './components/Nav/SoftwareDevelopment/SoftwareDevelopment';
import CyberSecurity from './components/Nav/CyberSecurity/CyberSecurity';
import Art from './components/Nav/Art/Art'
import GraphicDesign from './components/Nav/Graphic Design/GraphicDesign';

const App: React.FC = () => {
// This function returns the Nav bar to the root page
  return (
    <div className="app-container">
    <Router>
      <Nav />
      <Routes>
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/art" element={<Art />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
