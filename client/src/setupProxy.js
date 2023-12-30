const { createProxyMiddleware } = require('http-proxy-middleware');


// for vercel
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://hireme-api.vercel.app',
      changeOrigin: true,
    })
  );
};

// for localhost
// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:3001',
//       changeOrigin: true,
//     })
//   );
// };