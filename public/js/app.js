'use strict';

var logisticsApp = angular.module('dashboardApp', ['ngRoute', 'ngResource'])
		.config(function($routeProvider, $locationProvider) {

			$routeProvider
				.when('/home', {
					templateUrl: 'partials/home',
					controller: 'homeController'
				})
				.otherwise({
					redirectTo: '/home'
				});

			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
			});
	})