var parser 		= require('xml2json');
var fs 			= require('fs');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	app.get('/api/getChartData', function(req, res){
		var json;
		fs.readFile('./public/assets/person.xml', 'utf8', function (err, data) {
			console.log("xml  ->", data);
 	
			json = JSON.parse(parser.toJson(data));
			console.log("to json ->", json);
						
			res.json(json.Machines);
		});
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.json({
			"working": true
		});
	});

};