import React from 'react';
// import './Nav.css'; // Make sure to create a corresponding CSS file for styling

const Nav = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <form className="container-fluid justify-content-start">
        <button className="btn btn-outline-success me-2" type="button">Main button</button>
        <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
      </form>
    </nav>
  );
};

export default Nav;