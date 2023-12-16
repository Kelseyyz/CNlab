var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/version', function(req, res, next) {
  res.send({ 'version': '1.0.0' });
});

router.get('/echo', function(req, res, next) {
  res.send({ 'name': req.query.name });
});

router.get('/sum', function(req, res, next) {
  res.send({ 'result': parseInt(req.query.a, 10) + parseInt(req.query.b, 0) });
});

module.exports = router;
