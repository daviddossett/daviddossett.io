import Head from 'next/head';
import Link from 'next/link';

function Layout({ children }: any): JSX.Element {
  return (
    <div className='p-8 max-w-[840px] mx-auto'>
      <Head>
        <title>David Dossett</title>
        <meta name='description' content='My website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className='list-none py-8 md:px-6 md:pt-8 md:pb-24'>
        <ul className='flex justify-between'>
          <li>Image</li>
          <div className='flex gap-8'>
            <li>
              <Link href='/'>Work</Link>
            </li>
            <li>
              <Link href='/about'>Other</Link>
            </li>
          </div>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
