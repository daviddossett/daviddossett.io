import Link from 'next/link';
import Card from '../components/card';
import Layout from '../components/layout';
import code from '../public/images/code-192.png';

export default function Home() {
  return (
    <Layout>
      <main className='grid gap-24 overflow-auto'>
        <div className='md:px-6'>
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
        <div>
          <div className='grid gap-10'>
            <h2 className='md:px-6'>Recent work</h2>
            <ul className='grid grid-rows-4 gap-8 md:grid-cols-2'>
              <li>
                <Card title='Visual Studio Code' desc='Lorum ipsum foo bar' to='/visual-studio-code' image={code} />
              </li>
              <li>
                <Card title='Webview UI Toolkit' desc='Lorum ipsum foo bar' to='/webview-ui-toolkit' image={code} />
              </li>
              <li>
                <Card title='Product Insights' desc='Lorum ipsum foo bar' to='/product-insights' image={code} />
              </li>
              <li>
                <Card title='Grid Playground' desc='Lorum ipsum foo bar' to='/grid-playround' image={code} />
              </li>
              <li>
                <Card title='filmandcolor' desc='Lorum ipsum foo bar' to='/filmandcolor' image={code} />
              </li>
              <li>
                <Card title='Aria' desc='Lorum ipsum foo bar' to='/aria' image={code} />
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
