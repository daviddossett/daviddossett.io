import Link from 'next/link';
import Card from '../components/card';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <main className='grid'>
        <h1>Hi, I'm David.</h1>
        <p>
          I'm a product designer and UI engineer. Right now I'm working on{' '}
          <a href='https://code.visualstudio.com' target='blank'>
            Visual Studio Code
          </a>
          . Previously I was designing interfaces at Microsoft. In my free time I play music, play with my daughter, and
          take photos.
        </p>
        <ul className='grid grid-rows-4 gap-1'>
          {/* <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li> */}
        </ul>
      </main>
    </Layout>
  );
}
