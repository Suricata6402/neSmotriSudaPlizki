var express = require('express');
var router = express.Router();

var register_users = [];

router.get('/', function (req,res,nex) {
  res.send("fkgnfdkj");
});

router.get('/register',function (req,res,nex) {
  console.log(req.originalUrl); // '/admin/new'
  console.log(req.baseUrl); // '/admin'
  console.log(req.path); // '/new'

  console.log(req.originalUrl.replace('/users/register?',''));
  register_users.push(req.originalUrl.replace('/users/register?',''));
      console.log(register_users);
  res.send("fdgh");
});

module.exports = router;
