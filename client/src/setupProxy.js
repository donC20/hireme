const { createProxyMiddleware } = require('http-proxy-middleware');


// for vercel
// module.exports = function(app) {
//   console.log('proxy called');
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'https://hireme-api-97hy.onrender.com',
//       changeOrigin: true,
//     })
//   );
// };

// module.exports = function (app) {
//   console.log('proxy called');
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'https://hireme-api.vercel.app',
//       changeOrigin: true,
//       pathRewrite: {
//         '^/api': '', // remove the /api prefix
//       },
//     })
//   );
// };

// for localhost
module.exports = function (app) {
  // Assuming that if NODE_ENV is not set, it defaults to 'development'
  const target =
    process.env.NODE_ENV === 'production'
      ? 'https://hireme-a0qs.onrender.com'
      : 'http://localhost:3001';

  app.use(
    '/api',
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
};