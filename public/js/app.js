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
'use strict';

/* global dashboardApp, c3 */ 

dashboardApp.
  controller('homeController', function ($scope, $http, dataService, $timeout) {
  	
  });

'use strict';

/* Service */

/* global dashboardApp */ 
dashboardApp.factory('dataService', function($http) {
	return {
		getData : function(callback) {
			$http.get('/api/data').success(callback);
		}
	};
});