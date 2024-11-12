import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container d-flex justify-content-center">
        <form className="d-flex">
          <Link to="/software-development">
            <button className="btn btn-outline-primary me-2" type="button">
              Software Development
            </button>
          </Link>
          <Link to="/cyber-security">
            <button className="btn btn-outline-primary me-2" type="button">
              Cyber Security
            </button>
          </Link>
          <Link to="/art">
            <button className="btn btn-outline-primary me-2" type="button">
              Art
            </button>
          </Link>
          <Link to="/graphic-design">
            <button className="btn btn-outline-primary" type="button">
              Graphic Design
            </button>
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Nav;
