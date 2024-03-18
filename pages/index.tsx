import Card from '../components/card';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <main className='mx-auto w-full max-w-3xl px-4 py-12 pb-10 md:px-8'>
        <div className='md:px-6'>
          <p>
            Hi, I'm David. I'm a designer and maker of software. I'm currently building{' '}
            <a href='https://code.visualstudio.com' target='blank'>
              VS Code
            </a> and GitHub Copilot Chat.
          </p>
        </div>
      </main>
    </Layout>
  );
}
