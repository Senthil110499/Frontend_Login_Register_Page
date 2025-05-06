import React from 'react';
import Navbar from './Navbar.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Welcome to the Home Page!</h2>
        <p>You are logged in.</p>
      </div>
    </>
  );
};

export default Home;