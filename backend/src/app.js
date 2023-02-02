const express = require('express');
require('express-async-errors');
const cors = require('cors');
const app = express();
const helmet = require('helmet');
const authController = require ('./controllers/authController');
const authMiddleware = require('./middlewares/authMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const settingsController = require ('./controllers/settingsController')

app.use(cors());

app.use(helmet());

app.use(express.json());

app.post('/login', authController.doLogin);

app.get('/settings', authMiddleware, settingsController.getSettings);

app.patch('/settings', authMiddleware, settingsController.updateSettings);

app.post('/logout', authController.doLogout);

app.use(require('./middlewares/errorMiddleware'));

module.exports = app;