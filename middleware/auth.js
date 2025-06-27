const authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (apiKey === '123456') {
    next(); // Allow
  } else {
    res.status(401).json({ error: 'Unauthorized: Invalid or missing API key' });
  }
};

module.exports = authenticate;
