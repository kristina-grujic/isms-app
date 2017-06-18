const Category = require('../models/Category');
const getDecodedToken = require('./utils/getToken');
const { capitalize } = require('lodash');

exports.index = (req, res) => {
  Category.findAll({
    limit: 20,
  })
    .then(categories => res.status(200).json({ data: categories }))
    .catch(error => res.status(500).json({ error }));
};

exports.create = (req, res) => {
  const decoded = getDecodedToken(req.headers);
  if (!decoded || decoded.user_type !== 'admin') {
    return res.status(401).json({ error: 'Not an administrator' });
  }
  if (!req.body.name) return res.status(400).json({ error: 'No category name!' });
  const category = req.body;
  category.name = capitalize(category.name);
  return Category.create(category)
    .then(category => res.status(200).json({ data: category }))
    .catch(error => res.status(500).json({ error }));
};

exports.edit = (req, res) => {
  if (!req.body.id) return res.status(400).json({ error: 'No category id!' });
  if (!req.body.name) return res.status(400).json({ error: 'No category name!' });
  const decoded = getDecodedToken(req.headers);
  if (!decoded || decoded.user_type !== 'admin') {
    return res.status(401).json({ error: 'Not an administrator' });
  }
  return Category.update(
    { name: req.body.name },
    {
      where: {
        id: req.body.id
      }
    }
  )
    .then(category => res.status(200).json({ data: category }))
    .catch(error => res.status(500).json({ error }));
};
