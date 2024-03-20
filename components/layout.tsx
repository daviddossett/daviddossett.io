import Head from 'next/head';

function Layout({ children }: any): JSX.Element {
  return (
    <div className='max-w-[720px] mx-auto w-fullpx-4 py-28 pb-10 md:px-8'>
      <Head>
        <title>David Dossett</title>
        <meta name='description' content='My website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </div>
  );
}

export default Layout;
// Path: components/card.tsx