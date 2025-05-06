import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;