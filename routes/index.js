var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getcity',function(req,res,next) {
            console.log("In getcity route");
          });

module.exports = router;
