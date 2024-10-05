import React from 'react';
// import './Nav.css'; // Make sure to create a corresponding CSS file for styling

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MyWebsite</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/software-engineer">Software Engineer</a></li>
        <li><a href="/cybersecurity">Cyber Security</a></li>
        <li><a href="/art">Art</a></li>
        <li><a href="/graphic-design">Graphic Design</a></li>
      </ul>
    </nav>
  );
};

export default Nav;