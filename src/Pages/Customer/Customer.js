import React from 'react';
import './Customer.css';
import shipping from '../../images/free-shipping.png';
import warranty from '../../images/warranty.png';
import returns from '../../images/returns.png';
import checkout from '../../images/checkout.png';

const Customer = () => {
  return (
    <div className='customer-satisfaction'>
      <h3>
        Customer Satisfaction Guaranteed
      </h3>

      <div className='amenities'>
        <div>
          <img src={shipping} alt="free-shipping" />
          <h3>free shipping</h3>
          <p>Free worldwide shipping</p>
        </div>
        <div>
          <img src={warranty} alt="warranty" />
          <h3>2 year warranty</h3>
          <p>Every piece comes with a 2 year warranty</p>
        </div>
        <div>
          <img src={returns} alt="returns" />
          <h3>100-day returns</h3>
          <p>We offer a full refund within 100 days of purchase</p>
        </div>
        <div>
          <img src={checkout} alt="checkout" />
          <h3>secure checkout</h3>
          <p>Safe and secure online shopping</p>
        </div>
      </div>
    </div>
  );
};

export default Customer;