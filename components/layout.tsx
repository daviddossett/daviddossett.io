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
      <nav className='list-none'>
        <ul>
          <li>Image</li>
          <li>
            <Link href='/'>Work</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
