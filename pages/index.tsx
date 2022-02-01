import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <main>
        <Image src='/images/headshot.jpeg' alt='My headshot' width={300} height={300} />
        <h1>Hi, I'm David Dossett.</h1>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </main>
    </Layout>
  );
};

export default Home;
