import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';



const Home = () => (
  
    <div>

      <HeroBanner />

      <div className="products-heading">
        <h2>Best selling pictures</h2>
        <p>Pictures of many</p>
      </div>

      <div className="products-container">
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      <FooterBanner/>

    </div>
  
);

export default Home;