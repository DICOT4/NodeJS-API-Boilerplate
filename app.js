const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// db connection
mongoose.connect('PLACE-URL-HERE', {useNewUrlParser: true, useUnifiedTopology: true}).then(
    () => { console.log('MongoDB connection established successfully..'); },
    err => { console.log('MongoDB connection error'); }
);

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json({'response': 'Failed', 'data': err.message});
});

module.exports = app;
