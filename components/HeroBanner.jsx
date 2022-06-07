import React from 'react'
import Link from 'next/link';



const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
    <p className="beats-solo">{heroBanner.smallText}</p>
      <h3>MID TEXT</h3>
      <img src="" alt="headphones" className="hero-banner-image"/>
      <div>
        <Link href="/product/ID">
          <button type="button" >BUTTON TEXT</button>
        </Link>

        <div className="desc">
          <h5>Description</h5>
          <p>DESCRIPTION</p>
        </div>

      </div>
    </div>


  )
}

export default HeroBanner