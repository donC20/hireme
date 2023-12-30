const { createProxyMiddleware } = require('http-proxy-middleware');


// for vercel
// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'https://hireme-api.vercel.app',
//       changeOrigin: true,
//     })
//   );
// };

// for localhost
module.exports = function (app) {
  // Assuming that if NODE_ENV is not set, it defaults to 'development'
  const target =
    process.env.NODE_ENV === 'production'
      ? 'https://hireme-nu.vercel.app'
      : 'http://localhost:3001';

  app.use(
    '/api',
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
};