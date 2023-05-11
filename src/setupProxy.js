module.exports = function (app) {

  app.use(function (_req, res, next) {
    res.removeHeader("X-Powered-By");
    res.setHeader("X-Frame-Options", "Deny");
    res.setHeader("X-Content-Type-Options", "nosniff");
    next();
  });
};