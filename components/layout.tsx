import Head from 'next/head';

function Layout({ children }: any): JSX.Element {
  return (
    <div className='max-w-[840px] mx-auto'>
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
// Path: components/card.tsx