import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <p>About page placeholder</p>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </Layout>
  );
}
