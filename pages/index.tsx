import Link from 'next/link';
import Card from '../components/card';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <main className='grid gap-24 overflow-auto'>
        <div>
          <h1>Hi, I'm David.</h1>
          <p>
            I'm a product designer and UI engineer. I'm currently working on{' '}
            <a href='https://code.visualstudio.com' target='blank'>
              Visual Studio Code
            </a>
            . Previously I was designing interfaces and leading design teams at Microsoft. In my free time I play music,
            hang out with my daughter, and take photos.
          </p>
        </div>
        <ul className='grid grid-rows-4 gap-8'>
          <li>
            <Card title='Visual Studio Code' desc='Lorum ipsum foo bar' />
          </li>
          <li>
            <Card title='Webview UI Toolkit for Visual Studio Code' desc='Lorum ipsum foo bar' />
          </li>
          <li>
            <Card title='Product Insights' desc='Lorum ipsum foo bar' />
          </li>
          <li>
            <Card title='Grid Generator' desc='Lorum ipsum foo bar' />
          </li>
          <li>
            <Card title='filmandcolor' desc='Lorum ipsum foo bar' />
          </li>
          <li>
            <Card title='Aria' desc='Lorum ipsum foo bar' />
          </li>
        </ul>
      </main>
    </Layout>
  );
}
