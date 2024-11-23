import React from 'react';
import insurance from '../../../assets/3.png'

const Insurance: React.FC = () => {
  return (
    <>
      <div className="content-container">
      <head><title>Insurance</title></head>
        <div className="container d-flex flex-column align-items-center text-center py-5">
          <h1 className="display-4 mb-4">Insurance</h1>
          <div className="content-wrapper">
            <div className="image-container">
              <img src={insurance} width="50%" alt="Aura Wellness Insurance" />
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </>
  );
};

export default Insurance;
