import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';


import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    // with StateContext we want to pass the State everywhere
    <StateContext>

    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  </StateContext>
  )
}

export default MyApp
