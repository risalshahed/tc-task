import React from 'react';
import Banner from '../Banner/Banner';
import Customer from '../Customer/Customer';
import Jewellery from '../Jewellery/Jewellery';
import Collections from '../Collections/Collections';

const Home = () => {
  return (
    <div>
      <Banner />
      <Customer />
      <Jewellery />
      <Collections />
    </div>
  );
};

export default Home;