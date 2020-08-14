var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var dbConfig = require('./config/database');
var authRouter = require('./routes/auth');
var todoRouter = require('./routes/todo');
var todoListRouter = require('./routes/todoList');
var server = require('./server');
const port = 3000;

mongoose.connect(dbConfig.databaseConnectionString, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', authRouter);
app.use('/api/todo', todoRouter);
app.use('/api/todoList', todoListRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.listen(port, () => console.log('todo api app listening on port ' + port + '!'));