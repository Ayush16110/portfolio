import React from 'react';
import Navbar from '../components/Navbar';
import Herosectionhome from '../components/Herosectionhome';
import './global.css';
import Divider from '../components/Divider';

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Herosectionhome/>
      <Divider/>
    </div>
  );
};

export default Home;
