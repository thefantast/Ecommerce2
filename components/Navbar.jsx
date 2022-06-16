import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

function Navbar() {

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
           Picture Store
        </Link>
      </p>
      <button tpye="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  )
}

export default Navbar