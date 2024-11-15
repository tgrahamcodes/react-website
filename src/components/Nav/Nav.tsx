import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav: React.FC = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container d-flex justify-content-center">
        <form className="d-flex">
          <Link to="/" className="btn btn-outline-primary me-2">
            Home
          </Link>
          <Link to="/programs" className="btn btn-outline-primary me-2">
            Programs
          </Link>
          <Link to="/treatment" className="btn btn-outline-primary me-2">
            Treatment
          </Link>
          <Link to="/insurance" className="btn btn-outline-primary me-2">
            Insurance
          </Link>
          <Link to="/contact" className="btn btn-outline-primary">
            Contact
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Nav;
