var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

module.exports = router;
