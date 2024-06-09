import Layout from "../components/layout";
import { Footer } from "../components/footer";
import Link from "next/link";
import { ExperienceList } from "../components/experience";
import { Projects } from "../components/projects";

const vsCodeLink = (
  <Link className="intro" href="https://code.visualstudio.com" target="blank">
    VS Code
  </Link>
);
const copilotLink = (
  <Link
    className="intro"
    href="https://github.com/features/copilot"
    target="blank"
  >
    GitHub Copilot Chat
  </Link>
);

export default function Home() {
  return (
    <Layout>
      <div className="py-16 max-w-3xl">
        <p className="intro">
          Hi, I'm David. I'm a designer based in Seattle, WA. I'm currently
          leading design for {vsCodeLink} and {copilotLink} at Microsoft.
        </p>
        <p className="intro">
          I've been at Microsoft since 2016. Before VS Code, I led design for
          Aria, a real-time analytics app and platform. I also spent time as a
          developer building the design system for Customer Insights.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-14">
        <Projects />
        <ExperienceList />
      </div>
      <Footer />
    </Layout>
  );
}
