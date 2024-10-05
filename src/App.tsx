import React from 'react';
import logo from './logo.webp';
import Nav from './Nav';

import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>
              (not really)
            </p>
            <Nav></Nav>
        </header>
      </div>
  );
}

export default App;
