import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <main>
        <Image src='/images/headshot.jpeg' alt='My headshot' width={300} height={300} />
        <h1>Hello World</h1>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </main>
      <section>
        <h2>Blog</h2>
      </section>
    </Layout>
  );
}
