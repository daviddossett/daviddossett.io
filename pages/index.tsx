import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  const vsCodeLink = <Link href='https://code.visualstudio.com' target='blank'>VS Code</Link>
  const copilotLink = <Link href='https://github.com/features/copilot' target='blank'>GitHub Copilot Chat</Link>
  const eightNinthsLink = <Link href='https://github.com/features/copilot' target='blank'>8ninths</Link>

  return (
    <Layout>
      <main>
        <p>Hi, I'm David. I'm a designer and maker of software based in Seattle, WA. I'm currently leading design for {vsCodeLink} and building {copilotLink} at Microsoft.</p>
        <p>I've been at Microsoft since 2016. Before VS Code, I led design for Aria, a real-time analytics app and platform. I also spent time as a developer building the design system for Customer Insights. I learned the ropes at {eightNinthsLink} working on AR/VR experiences.</p>
        <p>More soon.</p>
        <div className='flex space-x-4 gap-1'>
          <Link href='https://twitter.com/david_dossett' target='blank'>Twitter</Link>
          <Link href='https://github.com/daviddossett' target='blank'>GitHub</Link>
          <Link href='https://www.linkedin.com/in/davidcdossett/' target='blank'>LinkedIn</Link>
        </div>
      </main>
    </Layout>
  );
}
