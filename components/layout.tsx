import Head from 'next/head';
import Link from 'next/link';

function Layout({ children }: any): JSX.Element {
  return (
    <div className='p-8'>
      <Head>
        <title>David Dossett</title>
        <meta name='description' content='My website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className='list-none py-8'>
        <ul className='flex justify-between'>
          <li>Image</li>
          <div className='flex gap-4'>
            <li>
              <Link href='/'>Work</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
          </div>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
