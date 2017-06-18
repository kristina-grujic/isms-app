const sequelize = require('../config/sequelize');
const Product = require('../models/Product');
const Category = require('../models/Category');
const getDecodedToken = require('./utils/getToken');

exports.index = (req, res) => {
  const query = req.query.query || '';
  Product.findAll({
    include: [
      {
        model: sequelize.models.category,
      }
    ],
    where: {
      name: { $like: `%${query}%` },
    }
  })
    .then(data => res.status(200).json({ data }))
    .catch(error => res.status(500).json({ error }));
};

exports.create = (req, res) => {
  const decoded = getDecodedToken(req.headers);
  if (!decoded || decoded.user_type !== 'admin') {
    return res.status(401).json({ error: 'Not an administrator' });
  }
  const body = req.body;
  const categoryId = body.categoryId;
  delete body.categoryId;
  Category.find({
    where: {
      id: categoryId,
    }
  })
    .then((category) => {
      category.createProduct(body)
        .then(data => res.status(200).json({ data }))
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};


exports.edit = (req, res) => {
  const decoded = getDecodedToken(req.headers);
  if (!decoded || decoded.user_type !== 'admin') {
    return res.status(401).json({ error: 'Not an administrator' });
  }
  const body = req.body;
  const updateObject = {};
  if (body.name) {
    updateObject.name = body.name;
  }
  if (body.values) {
    updateObject.values = body.values;
  }
  if (body.description) {
    updateObject.description = body.description;
  }
  Product.update(
    updateObject,
    {
      where: {
        id: req.body.productId
      }
    }
  )
    .then(product => res.status(200).json({ data: product }))
    .catch(error => res.status(500).json({ error }));
};
