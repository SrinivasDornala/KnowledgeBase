var express = require('express');
var router = express.Router();

var Article = require('../models/article');

router.get('/', function(req, res, next) {
  Article.getArticles(function(err,articles){
  		if(err){
  			console.log(err);
  		}
  		res.json(articles);
  });
});

router.get('/:id', function(req, res, next) {
  Article.getArticlebyId(red.params.id,function(err,articles){
  		if(err){
  			console.log(err);
  		}
  		res.json(articles);
  });
});

router.get('/category/:category', function(req, res, next) {
  Article.getArticlebyCategory(red.params.category,function(err,articles){
  		if(err){
  			console.log(err);
  		}
  		res.json(articles);
  });
});

module.exports.createArticle=function(newArticle,callback){
	newArticle.save(callback);
}

module.exports = router;