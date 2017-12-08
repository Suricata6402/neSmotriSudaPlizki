var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan'); //обрабатывает аргументы что в боди.
var cookieParser = require('cookie-parser');//
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();//создали новый сервер

// view engine setup
app.set('views', path.join(__dirname, 'views'));//настрока темплейт енжин jade, mastash. Cant work with html. If html -> ejs
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//__dirname то где мы сейчас. /public -то что в отрытом доступе / use -для того что использовать

//удалить сэтого места
// app.use('/', index);
// app.use('/users', users);
//midelware мы не щганичены нашими енд
//endpoint - на пхп
//мемеизация запоминани данных
//гейтинг
/*есьб ф-я некст
 */

module.exports = app;