const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.stattusCode = err.stattusCode || 500;
  if (err.code === "ERR_ASSERTION") {
    err.message = err.message;
  }
  return res.status(err.statusCode).json({
    message: err.message,
  });
};

module.exports = errorMiddleware;
