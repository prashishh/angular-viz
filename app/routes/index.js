'use strict';

module.exports = function(app) {
	
	// view rendering
	app.get('/partials/:name', function(req, res) {
		res.render('partials/' + req.params.name);
	});

	app.get('/', function(req, res) {
		res.render('index');
	});


	// api
	app.get('/api/data', function(req, res) {
		var data = [];
		for (var i = 0; i < 10; i++)
			data.push(Math.floor(Math.random() * 10) + 1);
		
		res.status(200).send(data);
	});
};