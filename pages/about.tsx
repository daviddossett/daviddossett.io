import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <main className='grid grid-cols-4 gap-4 p-8'>
        <h1 className='col-span-4'>About</h1>
        <p>This is the about page</p>
      </main>
    </Layout>
  );
}
