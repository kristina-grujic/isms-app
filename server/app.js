/**
 * Module dependencies.
 */
require('dotenv').load({ path: '.env' });
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const passport = require('passport');
const path = require('path');
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');
const multer = require('multer');
const sequelize = require('./config/sequelize');

const upload = multer();

require('./config/passport')(passport);

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */

/**
 * Controllers (route handlers).
 */
const populateController = require('./controllers/populate');
const adminController = require('./controllers/admin');
const usersController = require('./controllers/users');
const categoriesController = require('./controllers/categories');

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.use(expressStatusMonitor());
app.use(compression());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use((req, res, next) => {
  next();
});
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});
/**
 * User routes.
 */
app.post('/populate', populateController.index);
// authentication routes
app.post('/admin_login', adminController.login);
app.post('/login', usersController.login);
app.post('/register', usersController.signup);
// categories routes
app.get('/categories', categoriesController.index);
app.post('/categories', categoriesController.create);
app.put('/categories', categoriesController.edit);

app.get('*', (req, res) => {
  res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});
/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
sequelize.sync({ force: false }).then(() => {
  app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode',
                chalk.green('✓'),
                app.get('port'),
                app.get('env'));
    console.log('  Press CTRL-C to stop\n');
  });
});

module.exports = app;
