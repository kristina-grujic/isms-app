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
// const multer = require('multer');
const sequelize = require('./config/sequelize');
const helmet = require('helmet');
const https = require('https');
const fs = require('fs');

// const upload = multer();

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
const productsController = require('./controllers/products');
const valuesController = require('./controllers/values');

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.disable('x-powered-by');
app.use(helmet.frameguard());
app.use(helmet.noCache());

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
  res.header('Access-Control-Allow-Origin', '*'); // set to real domain in production
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
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
app.delete('/categories', categoriesController.delete);
// products routes
app.get('/products', productsController.index);
app.get('/product', productsController.view);
app.post('/products', productsController.create);
app.put('/products', productsController.edit);
app.delete('/products', productsController.delete);
// values routes
app.post('/values', valuesController.create);
app.put('/values', valuesController.edit);
app.delete('/values', valuesController.delete);

app.get('*', (req, res) => {
  res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});
/**
 * Error Handler.
 */
app.use(errorHandler());

const credentials = {
  key: fs.readFileSync('../sslcert/server.key'),
  cert: fs.readFileSync('../sslcert/server.crt'),
  ca: fs.readFileSync('../sslcert/ca.crt'),
  requestCert: true,
  rejectUnauthorized: false,
};

const httpsServer = https.createServer(credentials, app);
/**
 * Start Express server.
 */
sequelize.sync({ force: false }).then(() => {
  httpsServer.listen(app.get('port'), () => {
    console.log('%s App is running at https://localhost:%d in %s mode',
                chalk.green('✓'),
                app.get('port'),
                app.get('env'));
    console.log('  Press CTRL-C to stop\n');
  });
});
