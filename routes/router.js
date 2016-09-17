var express = require('express');
var router = express.Router();
var mail_app = require('../mail_app.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/mail',mail_app);

module.exports = router;
