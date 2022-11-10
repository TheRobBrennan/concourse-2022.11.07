import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

// Use static generation
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  //  getStaticProps only runs on the server-side. It will never run on the client-side.
  //  It won’t even be included in the JS bundle for the browser.
  //  That means you can write code such as direct database queries without them being sent to browsers.
  //
  //  Because it’s meant to be run at build time, you won’t be able to use data that’s only available
  //  during request time, such as query parameters or HTTP headers.
  //
  //  getStaticProps can only be exported from a page. You can’t export it from non-page files.
  //  One of the reasons for this restriction is that React needs to have all the required data
  //  before the page is rendered.

  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Rob.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
