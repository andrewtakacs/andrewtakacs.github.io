import React from 'react';
import Home from '../home/Home';
import EarthCode from '../earth/EarthCode';

import Overlay from '../overlay/Overlay';
import '../overlay/Overlay.css';

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
