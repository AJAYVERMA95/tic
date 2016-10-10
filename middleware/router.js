var express = require('express');
var router = express.Router();
var mail_app = require('./mail_app.js');

router.post('/mail',mail_app);

module.exports = router;
