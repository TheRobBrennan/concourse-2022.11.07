// Learn more about the request handler at https://nextjs.org/docs/api-routes/introduction
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
