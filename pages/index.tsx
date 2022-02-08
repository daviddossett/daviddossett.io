import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: any) {
  return (
    <Layout>
      <main>
        <Image src='/images/headshot.jpeg' alt='My headshot' width={300} height={300} />
        <h1 className='text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight'>Hello World</h1>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </main>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }: any) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
