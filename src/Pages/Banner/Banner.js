import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <div>
        <button id='arrival'>new arrivals</button>
        <button id='seller'>best sellers</button>
      </div>
    </div>
  );
};

export default Banner;