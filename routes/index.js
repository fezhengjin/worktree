var express = require('express');
var dir2json = require('../lib/dir2json');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var jsonData = !req.query.path ? {} : dir2json(req.query.path);
  res.render('index', { title: 'Express', currentPath: req.query.path || '', jsonData: JSON.stringify(jsonData)});
});

module.exports = router;
