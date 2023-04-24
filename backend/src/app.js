const express = require('express');
require('express-async-errors');
const cors = require('cors');
const app = express();
const helmet = require('helmet');
const authController = require ('./controllers/authController');
const authMiddleware = require('./middlewares/authMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');

const morgan = require ("morgan");

app.use(cors({origin: process.env.CORS_ORIGIN}));

app.use(helmet());

app.use(express.json());

app.use(morgan('dev'));

app.post('/login', authController.doLogin);

const settingsRouter = require('./routers/settingsRouter')
app.use('/settings', authMiddleware, settingsRouter);

const symbolsRouter = require('./routers/symbolsRouter')
app.use('/symbols', authMiddleware, symbolsRouter);

const exchangeRouter = require('./routers/exchangeRouter')
app.use('/exchange', authMiddleware, exchangeRouter);

app.post('/logout', authController.doLogout);

app.use(require('./middlewares/errorMiddleware'));

module.exports = app;