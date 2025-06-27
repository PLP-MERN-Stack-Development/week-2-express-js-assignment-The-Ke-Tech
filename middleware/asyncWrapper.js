const asyncWrapper = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncWrapper;


router.get('/', asyncWrapper(async (req, res) => {
  const products = await db.findAll();
  res.json(products);
}));
