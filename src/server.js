const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const dataTypeHandler = require('./dataTypeResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  '/': htmlHandler.getIndex,
  '/style.css': htmlHandler.getCSS,
  '/success': dataTypeHandler.success,
  '/badRequest': dataTypeHandler.badRequest,
  '/unauthorized': dataTypeHandler.unauthorized,
  '/forbidden': dataTypeHandler.forbidden,
  '/internal': dataTypeHandler.internal,
  '/notImplemented': dataTypeHandler.notImplemented,
  notFound: dataTypeHandler.notFound,
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const params = query.parse(parsedUrl.query);
  const acceptedTypes = request.headers.accept.split(',');

  if (urlStruct[parsedUrl.pathname]) {
    urlStruct[parsedUrl.pathname](request, response, acceptedTypes, params);
  } else {
    urlStruct.notFound(request, response, acceptedTypes);
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1: ${port}`);
});
