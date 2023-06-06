const {getCollections} = require('../db/connection');

module.exports = (req, res, next) => {
  const collection = getCollections();
  req.db = {...collection};
  next();
};
