var express = require('express');
var router = express.Router();

router.get('/', function(next, req, resxt) {
  res.render('/index', { title: 'Express' });
});

module.exports = router;
