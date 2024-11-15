import React from 'react';

const Header: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/programs">Programs</a></li>
        <li><a href="/treatment">Treatment</a></li>
        {/* <li><a href="/tour">Tour</a></li> */}
        <li><a href="/insurance">Insurance</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Header;
