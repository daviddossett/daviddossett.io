import Head from 'next/head';
import styles from '../styles/layout.module.css';

function Layout({ children }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>David Dossett</title>
        <meta name='description' content='My website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>{children}</div>;
    </>
  );
}

export default Layout;
