import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
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

// Server-side rendering
// export async function getServerSideProps(context) {
//   //  To use server-side rendering, we would need to use getServerSideProps
//   //  Because getServerSideProps is called at request time, its parameter (context) contains
//   //  request specific parameters.
//   //
//   //  You should use getServerSideProps only if you need to pre-render a page whose
//   //  data must be fetched at request time. Time to first byte (TTFB) will be slower than
//   //  getStaticProps because the server must compute the result on every request, and the
//   //  result cannot be cached by a CDN without extra configuration.

//   return {
//     props: {
//       // props for your component
//     },
//   };
// }

//  Client-side rendering
//
//  You can also pre-render without data and then load the data on the client-side.
//  This approach works well for user dashboard pages, for example. Because a dashboard is
//  a private, user-specific page, SEO is not relevant, and the page doesn’t need to
//  be pre-rendered. The data is frequently updated, which requires request-time data fetching.
//
//  The team behind Next.js has created a React hook for data fetching called SWR. We highly
//  recommend it if you’re fetching data on the client side. It handles caching,
//  revalidation, focus tracking, refetching on interval, and more. We won’t cover the
//  details here, but here’s an example usage:
/*
  import useSWR from 'swr';

  function Profile() {
    const { data, error } = useSWR('/api/user', fetch);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return <div>hello {data.name}!</div>;
  }
  */

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Rob.</p>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
