const notFound = (req, res, next) => {
  res.status(404);
  const error = new Error(`&#128540; Not found - ${req.originalUrl}`);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  //200 --> 500
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    menssage: errorHandler.menssage,
    stack: process.env.NODE_ENV === "production" ? "cake" : err.stack,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
