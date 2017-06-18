const Category = require('../models/Category');
const Value = require('../models/Value');

exports.create = (req, res) => {
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
