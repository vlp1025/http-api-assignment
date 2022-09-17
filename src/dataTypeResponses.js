const respond = (request, response, status, content, type) => {
  const types = {
    'Content-Type': type,
  };

  response.writeHead(status, types);
  response.write(content);
  response.end();
};

// 200 - Success
const success = (request, response, acceptedTypes) => {
  const displayObject = {
    message: 'This is a successful response.',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${displayObject.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, 200, responseXML, 'text/xml');
  }

  const stringedObject = JSON.stringify(displayObject);
  return respond(request, response, 200, stringedObject, 'application/json');
};

// let responseXML = '<response>';
// responseXML = `${responseXML} <message>${displayObject.message}</message>`;
// responseXML = `${responseXML} </response>`;

// let responseXML = '<response>';
// responseXML = `${responseXML} <message>${displayObject.message}</message>`;
// responseXML = `${responseXML} <id>${displayObject.id}</id>`;
// responseXML = `${responseXML} </response>`;

// 401 - Bad Request
const badRequest = (request, response, acceptedTypes, params) => {
  if (!params.valid || params.valid !== 'true') {
    const displayObject = {
      message: 'Missing valid query parameter set to true.',
      id: 'badRequest',
    };

    if (acceptedTypes[0] === 'text/xml') {
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>${displayObject.message}</message>`;
      responseXML = `${responseXML} <id>${displayObject.id}</id>`;
      responseXML = `${responseXML} </response>`;

      return respond(request, response, 400, responseXML, 'text/xml');
    }

    const stringedObject = JSON.stringify(displayObject);
    return respond(request, response, 400, stringedObject, 'application/json');
  }

  const displayObject = {
    message: 'You have all the valid parameters',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${displayObject.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, 200, responseXML, 'text/xml');
  }

  const stringedObject = JSON.stringify(displayObject);
  return respond(request, response, 200, stringedObject, 'application/json');
};

const unauthorized = (request, response, acceptedTypes, params) => {
  if (!params.loggedIn || params.loggedIn !== 'true') {
    const displayObject = {
      message: 'Missing loggedIn query parameter set to yes.',
      id: 'unauthorized',
    };

    if (acceptedTypes[0] === 'text/xml') {
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>${displayObject.message}</message>`;
      responseXML = `${responseXML} <id>${displayObject.id}</id>`;
      responseXML = `${responseXML} </response>`;

      return respond(request, response, 401, responseXML, 'text/xml');
    }

    const stringedoBject = JSON.stringify(displayObject);
    return respond(request, response, 401, stringedoBject, 'application/json');
  }

  const displayObject = {
    message: 'You are authorized to view this content.',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${displayObject.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, 200, responseXML, 'text/xml');
  }

  const stringedObject = JSON.stringify(displayObject);
  return respond(request, response, 200, stringedObject, 'application/json');
};

// 403 - Forbidden
const forbidden = (request, response, acceptedTypes) => {
  const displayObject = {
    message: 'You do not have access to this content',
    id: 'forbiddenError',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${displayObject.message}</message>`;
    responseXML = `${responseXML} <id>${displayObject.id}</id>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, 403, responseXML, 'text/xml');
  }

  const stringedObject = JSON.stringify(displayObject);
  return respond(request, response, 403, stringedObject, 'application/json');
};

// 500 - Internal
const internal = (request, response, acceptedTypes) => {
  const displayObject = {
    message: 'Internal Server Error. Something went wrong',
    id: 'internalError',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${displayObject.message}</message>`;
    responseXML = `${responseXML} <id>${displayObject.id}</id>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, 500, responseXML, 'text/xml');
  }

  const stringedObject = JSON.stringify(displayObject);
  return respond(request, response, 500, stringedObject, 'application/json');
};

// 501 - Not Implemented
const notImplemented = (request, response, acceptedTypes) => {
  const displayObject = {
    message: 'A get request for this page has not been implemented yet. Check again later for updated content',
    id: 'notImplemented',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${displayObject.message}</message>`;
    responseXML = `${responseXML} <id>${displayObject.id}</id>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, 501, responseXML, 'text/xml');
  }

  const stringedObject = JSON.stringify(displayObject);
  return respond(request, response, 501, stringedObject, 'application/json');
};

// 404 - Not Found
const notFound = (request, response, acceptedTypes) => {
  const displayObject = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${displayObject.message}</message>`;
    responseXML = `${responseXML} <id>${displayObject.id}</id>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, 404, responseXML, 'text/xml');
  }

  const stringedObject = JSON.stringify(displayObject);
  return respond(request, response, 404, stringedObject, 'application/json');
};

module.exports = {
  success,
  badRequest,
  unauthorized,
  notFound,
  notImplemented,
  internal,
  forbidden,
};
