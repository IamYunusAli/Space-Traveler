import React from 'react';
import applogo from '../images/planet.png';

function Nav() {
  return (
    <div>
      <div>
        <img src={applogo} alt="space logo" width="28" height="28" />
        <p>Space Travelers Hub</p>
      </div>
      <nav />
    </div>
  );
}

export default Nav;
