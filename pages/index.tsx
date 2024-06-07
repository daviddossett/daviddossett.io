import Layout from "../components/layout";
import { MarkdownRenderer } from "../components/markdown";
import { Footer } from "../components/footer";

const markdownPath = "/content/home.md";

export default function Home() {
  return (
    <Layout>
      <main>
        <MarkdownRenderer path={markdownPath} />
      </main>
      <Footer />
    </Layout>
  );
}
