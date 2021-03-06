require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { login, createUser } = require('./controllers/users');
const { validateUser, validateLogin } = require('./middlewares/validation');
const NotFoundError = require('./errors/NotFoundError');
const { PORT = 3001 } = process.env;

const app = express();

app.use(cors({ origin: true }));
const limiter = rateLimit({
  windowMs: 5000,
  max: 100,
  message: 'Пожалуйста, попробуйте позже',
});
app.use(limiter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect('mongodb://localhost:27017/mestodb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: true,
  })
  .then(() => console.log('Connected to DB'));

app.use(requestLogger);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', validateLogin, login);
app.post('/signup', validateUser, createUser);

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/card');

app.use('/users', auth, usersRouter);
app.use('/cards', auth, cardsRouter);

app.all('*', (req, res, next) => {
  next(new NotFoundError({ message: 'Запрашиваемый ресурс не найден' }));
});

app.use(errorLogger);
// обработчик celebrate для ошибок
app.use(errors());

app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send(err.message);
    return;
  }
  res.status(500).send({ message: `На сервере произошла ошибка: ${err.message}` });
  next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
