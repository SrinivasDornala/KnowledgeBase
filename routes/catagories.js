var express = require('express');
var router = express.Router();

var Category = require('../models/category');

/* GET users listing. */
router.get('/', function(req, res, next) {
   Category.getCategories(function(err,catagories){
  		if(err){
  			console.log(err);
  		}
  		res.json(catagories);
  });
});

router.get('/:id', function(req, res, next) {
   Category.getCategorybyId(req.params.id,function(err,catagories){
  		if(err){
  			console.log(err);
  		}
  		res.json(catagories);
  });
});
module.exports = router;

