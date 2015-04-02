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