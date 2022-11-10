//  [id].js handles specific routes - a filename of [...id].js would handle catch all routes
//  See https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";

// Styling
import utilStyles from "../../styles/utils.module.css";

// Create an array of possible paths for our slugs
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    //  If fallback is true, then the behavior of getStaticProps changes:
    //
    //    - The paths returned from getStaticPaths will be rendered to HTML at build time.
    //    - The paths that have not been generated at build time will not result in a 404 page.
    //      Instead, Next.js will serve a “fallback” version of the page on the first request to
    //      such a path.
    //    - In the background, Next.js will statically generate the requested path. Subsequent requests
    //      to the same path will serve the generated page, just like other pages pre-rendered at
    //      build time.
    //
    //  If fallback is blocking, then new paths will be server-side rendered with getStaticProps,
    //  and cached for future requests so it only happens once per path.
    //
    //  See https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false

    fallback: false,
  };
}

// Use static generation to get the post data for our slug (route)
export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
