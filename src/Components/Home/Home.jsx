// Components/Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Banking App</h1>
      <p>Use this app to manage your bank accounts.</p>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;
