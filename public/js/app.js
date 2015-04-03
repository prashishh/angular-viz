'use strict';

var dashboardApp = angular.module('dashboardApp', ['ngRoute', 'ngResource', 'ngMaterial'])
		.config(function($routeProvider, $locationProvider, $mdThemingProvider) {

			// change default color palette to deep orange
			$mdThemingProvider.theme('default')
				.primaryPalette('deep-orange');

			$routeProvider
				.when('/', {
					templateUrl: 'partials/home',
					controller: 'homeController'
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
  controller('homeController', function ($scope, $http, dataService, $interval) {
  	
  });

'use strict';

/* Service */

/* global dashboardApp */ 

dashboardApp.directive('lineChart', ['dataService', '$interval', function(dataService, $interval) {
	return {
		restrict: 'E',
    scope: {
      lineId: '@',
      realTime: '@'
    },
		template: '<div id="{{lineId}}">Hello {{lineId}}</div>',
		link: function(scope, iElement, iAttrs) {
      
      dataService.getData(function(data) {
         scope.chart = c3.generate({
            bindto: '#' + scope.lineId,
            size: {
                height: 240,
                width: 480
            },
            data: {
              columns:  [
                data
              ]
            }
          });
       });

      if(scope.realTime === 'y') {
      	$interval(function () {
          dataService.getData(function(data) {
            scope.chart.load({
                columns: [
                    data
                ]
            });
          });
        }, 3000);
      }
    }
	}
}]);
'use strict';

/* Service */

/* global dashboardApp */ 
dashboardApp.factory('dataService', function($http) {
	return {
		getData : function(callback) {
			var new_data = [];
			$http.get('/api/data').success(function(data, status, headers, config) {
				new_data.push('data1');

        for (var i = 0; i < data.length; i++)
          new_data.push(parseInt(data[i]));
				
				callback(new_data);
			});
		}
	};
});