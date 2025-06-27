const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[Error] ${err.name}: ${message}`);

  res.status(status).json({
    error: {
      name: err.name,
      message: message
    }
  });
};

module.exports = errorHandler;
