angular.module("search",["core"]),angular.module("search").factory("PaginatedMovies",["BaseCollection",function(a){var t=a.extend({total:0});return new t}]),angular.module("search").constant("API_KEY","nd3uzzypjhqxjqhujpqukdsu").constant("SEARCH_ENDPOINT","http://api.rottentomatoes.com/api/public/v1.0/movies.json").factory("moviesGateway",["$http","API_KEY","SEARCH_ENDPOINT",function(a,t,e){return{search:function(n,r){return a.jsonp(e,{params:_.defaults(r||{},{q:n,api_key:t,callback:"JSON_CALLBACK"})})}}}]),angular.module("search").factory("searchMovies",["PaginatedMovies","moviesGateway",function(a,t){return function(e,n){return t.search(e,n).then(function(t){a.set(t.data.movies),a.total=t.data.total})}}]),angular.module("navbar",["core","mgcrea.ngStrap","ui.router"]).constant("NAVBARURL","app/modules/navbar/").directive("navigationBar",["NAVBARURL",function(a){return{scope:{navigation:"="},templateUrl:a+"navbar.tmpl.html",controllerAs:"navbar",bindToController:!0,controller:function(){var a=this;a.brand=_.find(a.navigation,{brand:!0})||a.navigation[0]}}}]),angular.module("routes",["core","modules","ui.router"]).constant("ROUTESURL","app/routes/").constant("URLMAP",{home:"/",search:"search"}).config(["$stateProvider","$urlRouterProvider",function(a,t){t.otherwise("/")}]).factory("globalResolve",["$q",function(a){return a.all([])}]),angular.module("routes").config(["$stateProvider","URLMAP","ROUTESURL",function(a,t,e){a.state("search",{url:t.search,templateUrl:e+"search/search.tmpl.html",controller:"SearchCtrl"})}]).controller("SearchCtrl",["searchMovies",function(a){console.log(a),a("Jaws").then(function(a){console.log("complete",a)})}]),angular.module("core",["ngCookies","ngTouch","ngAnimate","ngSanitize"]).constant("COREURL","app/core/"),angular.module("core").factory("extendPrototype",function(){return function(a,t){var e,n=this;e=a&&_.has(a,"constructor")?a.constructor:function(){return n.apply(this,arguments)},_.extend(e,n,t);var r=function(){this.constructor=e};return r.prototype=n.prototype,e.prototype=new r,a&&_.extend(e.prototype,a),e.__super__=n.prototype,e}}),angular.module("routes").config(["$stateProvider","URLMAP","ROUTESURL",function(a,t,e){a.state("home",{url:t.home,templateUrl:e+"home/home.tmpl.html",controller:"HomeCtrl"})}]).controller("HomeCtrl",function(){}),angular.module("core").factory("BaseCollection",["extendPrototype",function(a){function t(){this.list=[]}return t.prototype.get=function(a){return null!=a?this.find({id:a}):this.list},t.prototype.add=function(a){this.list.push(a)},t.prototype.set=function(a){this.reset(),angular.extend(this.list,a)},t.prototype.reset=function(){this.list.length=0},_.each(["where","find","filter","forEach","map","max","min","pluck","sortBy","reject","remove"],function(a){t.prototype[a]=function(){var t=Array.prototype.slice.call(arguments,0);return _[a].apply(_,[this.list].concat(t))}}),t.extend=a,t}]),angular.module("tfIntensiveRottentomsApp",["core","routes","navbar"]).run(["$rootScope","GUEST_ROUTES","USER_ROUTES",function(a,t,e){var n=!0;a.navigation=n?e:t}]),angular.module("tfIntensiveRottentomsApp").controller("NavbarCtrl",["$scope",function(a){a.date=new Date}]),angular.module("modules",["search"]),angular.module("tfIntensiveRottentomsApp").constant("GUEST_ROUTES",[{name:"login",path:"login",label:"Signup"}]).constant("USER_ROUTES",[{name:"home",path:"home",label:"Home"},{name:"search",path:"search",label:"Search"}]),angular.module("tfIntensiveRottentomsApp").run(["$templateCache",function(a){a.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>'),a.put("app/modules/navbar/navbar.tmpl.html",'<div class="navbar navbar-default" role="navigation" bs-navbar=""><div class="navbar-header"><a class="navbar-brand" ui-sref="{{::navbar.brand.path}}">Angular Intensive</a></div><ul class="nav navbar-nav"><li ng-repeat="nav in navbar.navigation" ui-sref-active="active"><a ui-sref="{{::nav.path}}">{{::nav.label}}</a></li></ul></div>'),a.put("app/routes/home/home.tmpl.html",'<div class="container"><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p><a class="btn btn-lg btn-success" ng-href="#">Splendid!</a></p></div></div>'),a.put("app/routes/search/search.tmpl.html",'<div class="container"><h3>Search</h3></div>')}]);