// Dependencies
var express =  require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var request = require("request");
var mongoose = require("mongoose");

// Make use of native Promises that ES6 provides
mongoose.promise = Promise;

// Require the Article model
var Article = require("./models/Article.js");

// Initialize Express
var dbapp = express();
var PORT = process.env.PORT || 8010;

// Use Morgan and Body Parser
dbapp.use(logger("dev"));
dbapp.use(bodyParser.urlencoded({
	extended: false
}));

// Make public a static directory
dbapp.use(express.static("public"));

// Database and configuration with Mongoose
mongoose.connect("mongodb://localhost/nytimes");
var db = mongoose.connnection;

// Show any Mongoose errors
db.on("error", function(error) {
	console.log("Mongoose error: ", error);
});

// When successfully logged into database via Mongoose
db.once("open", function() {
	console.log("Mongoose connection successful.");
});

// Express Routes
// ---------------------------------------------------

// Route to retrieve saved articles from the MongoDB

// Route to save a single article

// Route to delete a single article by ObjectID

// Root route 
dbapp.get('/', (req, res) => {
	res.send(__dirname + '/public/index.html');
});

// Start the server to begin listening
dbapp.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});