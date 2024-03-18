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
      <div>{children}</div>
    </div>
  );
}

export default Layout;
