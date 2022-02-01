import Head from 'next/head';

function Layout({ children }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>David Dossett</title>
        <meta name='description' content='My website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>{children}</div>;
    </>
  );
}

export default Layout;
