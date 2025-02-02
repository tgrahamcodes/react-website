import React from 'react';
import programs from '../../../assets/1.png';

const Programs: React.FC = () => {
  return (
    <>
      <div className="content-container">
        <div className="container d-flex flex-column align-items-center text-center py-5">
          <head><title>Programs</title></head>
          <h1 className="display-4 mb-4">Programs</h1>
          <div className="content-wrapper">
            <img src={programs} width="25%" alt="Aura Wellness Programs" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
