const app = require('./settings');

app.get('/', function (req,res,next) {
    //res.send("Hello");// строкой передаем то что хотим ответить. Нет обаработки логики на сторовне фронтенда
    res.render("index.jade", {title: 'world'});
});
app.get('/name', function(req,res,next) {
    console.log(req.ip);
    res.send(req.ip);
});
app.get('/count', function(req,res,next) {
    if (count <10) {
        next();
    }
   // else {
   //    res.send('no');
   // }
    res.send(`${++count}`);
});
var count = 0;
app.get('/count', function(req,res,next) {
    res.send(`${++count}`);
});

// app.all('*')
// app.get('*')

//для постоенного открытого терминала - pm2 //pm2 status - есть айдишник. m2 status.
app.use('/users', require('./routes/users.js'));
//если ты видишь токой путь набравляйся по этому пути. Своего рода if

app.use('/users', require('./routes/users.js'));
module.exports = app;
