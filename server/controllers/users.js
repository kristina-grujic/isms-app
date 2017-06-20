const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const secret = require('../config/secrets').secret;

const User = require('../models/User');

exports.login = (req, res) => {
  const body = req.body;
  if (!body.email || !body.password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  User.findOne({
    where: {
      email: body.email,
    },
    raw: true,
  })
    .then((data) => {
      if (data) {
        const success = bcrypt.compareSync(body.password, data.password);
        if (success) {
          const token = jwt.encode(data, secret);
          delete data.password;
          return res.status(200).json({ token: `JWT ${token}`, data });
        }
      }
      return res.status(401).json({ error: 'Invalid email or password' });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.signup = (req, res) => {
  const body = req.body;
  body.user_type = 'user';
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passRegex.test(body.password)) {
    return res.status(400).json({ error: 'Password too simple' });
  }
  body.password = bcrypt.hashSync(body.password);
  User.create(body)
    .then(() => res.status(200).json({ success: 'Signup successful' }))
    .catch(error => res.status(200).json({ error }));
};
