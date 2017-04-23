var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sessions', { title: 'SESSIONS' });
});

router.get('/:sessionId', function(req, res, next) {
  res.render('sessions', { title: 'SESSIONS' });
});


module.exports = router;
