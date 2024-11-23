import React from 'react';
import home from '../../../assets/3.png'

const Home: React.FC = () => {
  return (
    <>
      <div className="content-container">
        <div className="container d-flex flex-column align-items-center section-container text-center py-lg-5">
          <head><title>Home</title></head>
          <div className="content-wrapper">
            Home Page
            <img src={home} width="50%" alt="Aura Wellness Home" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;