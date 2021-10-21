import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>David Dossett</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body>
          <h1>David</h1>
        </body>
      </Layout>
    </>
  );
};

export default Home;
