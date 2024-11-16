import React from 'react';
import logo from '../../logo.webp'


const Header: React.FC = () => {
  return ( 
    <div className="container d-flex flex-column align-items-center text-center py-5">
      <img src={logo} width="25%" alt="Aura Wellness Logo" />
    </div>
  );
};

export default Header;
