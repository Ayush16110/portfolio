import React from 'react';
import Navbar from '../components/Navbar';
import Herosectionhome from '../components/Herosectionhome';
import './global.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Herosectionhome/>
    </div>
  );
};

export default Home;
