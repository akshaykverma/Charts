// modules =================================================
var express     = require('express');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var config      = require('./config/config');
var mongoose    = require('mongoose');
var app         = express();
var parser 		= require('xml2json');
var fs 			= require('fs');
var cors 		= require('cors');

// configuration ===========================================
	
mongoose.connect(config.databaseURL, function(err){     // connect to our mongoDB database
	if (err) {
		console.log(err);
	} else {
		console.log("Connected to the database");
	}
}); 

app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
 
// API routes ==================================================
require('./app/routes')(app); // pass our application into our routes

fs.readFile(__dirname + '/public/assets/person.xml', 'utf8', function(err, data) {
    var json = parser.toJson(data);
    console.log("to json ->", json);
 });

// start app ===============================================
app.listen(config.port, function(err){
	if(err){
		console.log(err);
	}else{
		console.log("Listening on port " + config.port);
	}
});	
exports = module.exports = app; 						// expose app