//  Learn more about the request handler at https://nextjs.org/docs/api-routes/introduction

//  IMPORTANT: DO NOT FETCH an API Route from getStaticProps or getStaticPaths
//    - You should not fetch an API Route from getStaticProps or getStaticPaths.
//      Instead, write your server-side code directly in getStaticProps or getStaticPaths
//      (or call a helper function).
//
//  Here’s why: getStaticProps and getStaticPaths run only on the server-side and will never run
//  on the client-side. Moreover, these functions will not be included in the JS bundle
//  for the browser. That means you can write code such as direct database queries without
//  sending them to browsers.
//
//  See https://nextjs.org/docs/basic-features/data-fetching/get-static-props#write-server-side-code-directly

//  A Good Use Case: Handling Form Input
//
//  A good use case for API Routes is handling form input. For example, you can create a form
//  on your page and have it send a POST request to your API Route. You can then write code to
//  directly save it to your database. The API Route code will not be part of your client bundle,
//  so you can safely write server-side code.
//
/*
    export default function handler(req, res) {
      const email = req.body.email;
      // Then save email to your database, etc...
    }
*/

//  Preview mode
//
//  Static Generation is useful when your pages fetch data from a headless CMS. However, it’s not
//  ideal when you’re writing a draft on your headless CMS and want to preview the draft immediately
//  on your page. You’d want Next.js to render these pages at request time instead of build time and
//  fetch the draft content instead of the published content. You’d want Next.js to bypass
//  Static Generation only for this specific case.
//
//  Next.js has a feature called Preview Mode to solve the problem above, and it utilizes API Routes.
//  To learn more about it take a look at our Preview Mode documentation.
//
//  See https://nextjs.org/docs/advanced-features/preview-mode

//  Dynamic API Routes
//
//  API Routes can be dynamic, just like regular pages
//
//  See https://nextjs.org/docs/api-routes/dynamic-api-routes

export default function handler(req, res) {
  //  req is an instance of http.IncomingMessage, plus some pre-built middlewares.
  //    - https://nodejs.org/api/http.html#http_class_http_incomingmessage
  //    - https://nextjs.org/docs/api-routes/api-middlewares
  //
  //  res is an instance of http.ServerResponse, plus some helper functions.
  //    - https://nodejs.org/api/http.html#http_class_http_serverresponse
  //    - https://nextjs.org/docs/api-routes/response-helpers

  res.status(200).json({ text: "Hello" });
}
