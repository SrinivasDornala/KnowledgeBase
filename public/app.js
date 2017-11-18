var app = angular.module('kB',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){

	$routeProvider.when('/categories',{
		templateUrl : 'views/categories.view.html',
		controller: 'Categoriesctrl'
	}).
	when('/articles',{
		templateUrl : 'views/articles.view.html',
		controller: 'Articlesctrl'
	})
}]);