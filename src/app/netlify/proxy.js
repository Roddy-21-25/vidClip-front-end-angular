// netlify/proxy.js
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { path, httpMethod, queryStringParameters, body } = event;
  const backendUrl = 'http://www.vidclip.somee.com/api/VidClip';

  const response = await fetch(`${backendUrl}${path}`, {
    method: httpMethod,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  });

  const data = await response.json();

  return {
    statusCode: response.status,
    body: JSON.stringify(data),
  };
};
