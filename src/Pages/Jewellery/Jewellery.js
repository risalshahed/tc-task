import React from 'react';
import './Jewellery.css';

const Jewellery = () => {
  return (
    <div className='jewellery-section'>
      <p>
        <strong>Personalized jewellery</strong> and personalized gifts are the specialty of <strong>Oskar Hill</strong>. We offer a wide range of best-quality personalised handmade jewellery for both men and women. Explore our latest collection today!
      </p>
      <div className='jewelleries'>
        <div id='necklace'>
          <div className='shop-div'>
            <span>NECKLACES</span>
            <h3><u>SHOP NOW</u></h3>
          </div>
        </div>
        <div id='bracelet'>
          <div className='shop-div'>
            <span>BRACELETS</span>
            <h3><u>SHOP NOW</u></h3>
          </div>
        </div>
      </div>

      <div id='on-sale'>
        BEST SELLERS | ON SALE!
      </div>
    </div>
  );
};

export default Jewellery;