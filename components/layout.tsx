import Head from "next/head";
import { Header } from "./header";

function Layout({ children }: any): JSX.Element {
  return (
    <div className="max-w-[960px] mx-auto w-full px-4 md:px-8">
      <Head>
        <title>David Dossett</title>
        <meta name="description" content="Designer working on VS Code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
