const getDecodedToken = require('./utils/getToken');
const Category = require('../models/Category');
const Value = require('../models/Value');

exports.create = (req, res) => {
  const decoded = getDecodedToken(req.headers);
  if (!decoded || decoded.user_type !== 'admin') {
    return res.status(401).json({ error: 'Not an administrator' });
  }
  Category.findOne({ id: req.body.categoryId })
    .then((category) => {
      const value = {
        name: req.body.name,
        vtype: 'free',
        values: ['test'],
      };
      category.createValue(value)
        .then(data => res.status(200).json({ data }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.edit = (req, res) => {
  const decoded = getDecodedToken(req.headers);
  if (!decoded || decoded.user_type !== 'admin') {
    return res.status(401).json({ error: 'Not an administrator' });
  }
  Value.find({
    where: {
      id: req.body.valueId,
    }
  })
    .then((data) => {
      data.update({
        name: req.body.name,
      })
        .then(() => res.status(200).json({ data }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(400).json({ error }));
};


exports.delete = (req, res) => {
  const decoded = getDecodedToken(req.headers);
  if (!decoded || decoded.user_type !== 'admin') {
    return res.status(401).json({ error: 'Not an administrator' });
  }
  Value.destroy({
    where: {
      id: req.body.valueId,
    }
  })
    .then(value => res.status(200).json({ data: value }))
    .catch(error => res.status(500).json({ error }));
};
