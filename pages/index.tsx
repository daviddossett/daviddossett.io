import Link from 'next/link';
import Card from '../components/card';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <main className='grid grid-cols-1 gap-16 auto-rows-auto'>
        <h1 className='col-span-1'>Hi, I'm David.</h1>
        <p className='col-span-1'>
          I'm a product designer and UI engineer. Right now I'm working on Visual Studio Code. Previously I was
          designing interfaces at Microsoft. In my free time I create courses, resources, prototypes, and apps.
        </p>
        <ul className='col-span-1 grid grid-rows-4 gap-1'>
          <li>
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
          </li>
        </ul>
      </main>
    </Layout>
  );
}
