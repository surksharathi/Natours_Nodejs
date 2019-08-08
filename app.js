const Express = require('express');
const tourRouter = require('./routes/tourRouter');
const morgan = require('morgan');
const userRouter = require('./routes/userRouter');
const app = Express();

//1) Middle ware
app.use(Express.static(`${__dirname}/public`));
app.use(Express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use((req, res, next) => {
  console.log('Hello to middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter); // Router For Tour API
app.use('/api/v1/users', userRouter); //Router for User API

module.exports = app;
