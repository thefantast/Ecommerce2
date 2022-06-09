import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

//get the data as props from the bottom in the home

const Home = ({ products, bannerData }) => (
  
    <div>

      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        {console.log(bannerData)}
      <div className="products-heading">
        <h2>Best selling pictures</h2>
        <p>Pictures of many</p>
      </div>

    {/*loop over the products*/}

    <div className="products-container">
    {products?.map((product) => <Product key={product._id} product={product} />)}
  </div>

      <FooterBanner/>

    </div>
  
);

// is like useEffect to fetch Data for Next.js

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;