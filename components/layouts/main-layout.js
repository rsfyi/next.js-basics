import React from 'react';

import Head from 'next/head';

import { Header } from '../includes/Header';

export const MainLayout = ({ children }) => (
  <>
    <Head>
      <title>RSDOC.DEV</title>
      <link
        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        rel='stylesheet'
      />
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
        integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
        crossorigin='anonymous'
      />
      <link rel='stylesheet' href='/css/styles.css' />
    </Head>
    <div className='mainLayout_container'>
      <Header />
      <div className='container'>{children}</div>
    </div>
  </>
);
