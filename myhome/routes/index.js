let express = require('express');
let router = express.Router();
let commonDB = require('../commonDB');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', session: req.session });
});

module.exports = router;
