import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav: React.FC = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary" aria-label="Main navigation">
        <div className="container d-flex justify-content-center">
          <form className="d-flex">
            <Link to="/" className="btn btn-outline-primary me-2" aria-label="Home">
              Home
            </Link>
            <Link to="/programs" className="btn btn-outline-primary me-2" aria-label="Programs">
              Programs
            </Link>
            <Link to="/treatment" className="btn btn-outline-primary me-2" aria-label="Treatment">
              Treatment
            </Link>
            <Link to="/insurance" className="btn btn-outline-primary me-2" aria-label="Insurance">
              Insurance
            </Link>
            <Link to="/contact" className="btn btn-outline-primary" aria-label="Contact">
              Contact
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Nav;
