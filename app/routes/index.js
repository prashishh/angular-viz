'use strict'

module.exports = function(app) {
	app.get('/partials/:name', function(req, res) {
		res.render('partials/' + req.params.name);
	});

	app.get('/', function(req, res) {
		res.render('index');
	});
};