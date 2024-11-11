import React from 'react';
import logo from './logo.webp';
import Nav from './Nav';

import './App.css';

function App() {
  return (
        <nav className="navbar bg-body-tertiary">
          <form className="container-fluid justify-content-start">
            <button className="btn btn-outline-success me-2" type="button">Main button</button>
            <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
          </form>
          </nav>
  );
}

export default App;
