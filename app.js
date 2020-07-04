var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());

app.use('/api', indexRouter);
// app.set('view engine', 'html');

var history = require('connect-history-api-fallback');
app.use(express.static(path.join(__dirname, 'dist')));
app.use(history());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

app.use(function(req, res) {
	res.status(404).send();
})

module.exports = app;