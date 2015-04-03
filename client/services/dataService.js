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