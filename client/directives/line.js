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