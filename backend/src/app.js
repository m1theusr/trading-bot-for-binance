const express = require('express');
require('express-async-errors');
const cors = require('cors');
const app = express();
const helmet = require('helmet');
const authController = require ('./controllers/authController');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(cors());

app.use(helmet());

app.use(express.json());

app.post('/login', authController.doLogin);

app.post('/logout', authController.doLogout);

app.use(require('./middlewares/errorMiddleware'));

module.exports = app;