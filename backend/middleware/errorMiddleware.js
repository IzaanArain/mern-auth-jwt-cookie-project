
const notfound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // handling mongoose errors
  if (err.name === "CastError" && err.kind === "objectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  res.status(statusCode).json({
    status:0,
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notfound,errorHandler};
