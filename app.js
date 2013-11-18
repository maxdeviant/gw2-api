"use strict";

var App = angular.module("App", ["ngRoute"]);

App.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'Index',
		templateUrl: 'partials/index.html'
	})
	.when('/events', {
		controller: 'Events',
		templateUrl: 'partials/events.html'
	})
	.when('/items', {
		controller: 'Items',
		templateUrl: 'partials/items.html'
	})
	.otherwise({ redirectTo: '/' });
});