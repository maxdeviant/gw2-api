"use strict";

var App = angular.module("App", ["ngRoute", "ngCookies"]);

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
	.when('/events/:map_id', {
		controller: 'EventsMap',
		templateUrl: 'partials/events-map.html'
	})
	.when('/events/:map_id/:event_id', {
		controller: 'EventDetails',
		templateUrl: 'partials/event-details.html'
	})
	.when('/wvw', {
		controller: 'WvW',
		templateUrl: 'partials/wvw.html'
	})
	.when('/wvw/:match_id', {
		controller: 'WvWMatches',
		templateUrl: 'partials/wvw-matches.html'
	})
	.when('/items', {
		controller: 'Items',
		templateUrl: 'partials/items.html'
	})
	.otherwise({ redirectTo: '/' });
}).run(function(API, $cookieStore) {
	API.getWorlds().success(function(data) {
		API.getWorlds().success(function(data) {
			$cookieStore.put('Worlds', data);
		});
	});
});