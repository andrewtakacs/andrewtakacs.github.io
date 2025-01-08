import React from 'react';
import Home from '../home/Home';
import EarthCode from '../earth/EarthCode';
import '../overlay/Overlay.css';  // Import the Overlay CSS directly
import Overlay from '../overlay/Overlay';

const Space = () => {
  return (
    <div className="space-page">
      <Overlay />
      <Home />
      <EarthCode />
      <div className="space-background-div" style={{ height: '2000px' }}></div>
      <Home />
    </div>
  );
};

export default Space;
