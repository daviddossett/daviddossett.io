import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <main className='grid grid-cols-4 gap-4'>
        <h1 className='col-span-4'>Hi, I'm David.</h1>
        <p className='col-span-4'>
          I'm a product designer and UI engineer. Right now I'm working on Visual Studio Code. Previously I was
          designing interfaces at Microsoft. In my free time I create courses, resources, prototypes, and apps.
        </p>
        <ul className='col-span-4'>
          <li>Work 1</li>
          <li>Work 1</li>
          <li>Work 1</li>
          <li>Work 1</li>
          <li>Work 1</li>
          <li>Work 1</li>
        </ul>
      </main>
    </Layout>
  );
}
