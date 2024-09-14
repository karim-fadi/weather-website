// netlify/functions/getKey.js

exports.handler = async function(event, context) {
  const key = process.env.WEATHER_API_KEY;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: key }),
  };
};
