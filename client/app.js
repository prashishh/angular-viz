'use strict';

var dashboardApp = angular.module('dashboardApp', ['ngRoute', 'ngResource', 'ngMaterial'])
		.config(function($routeProvider, $locationProvider, $mdThemingProvider) {

			// change default color palette to deep orange
			$mdThemingProvider.theme('default')
				.primaryPalette('deep-orange');

			$routeProvider
				.when('/', {
					templateUrl: 'partials/home',
					controller: 'HomeController'
				})
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
			});
	});