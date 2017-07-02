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
var db = mongoose.connection;

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
dbapp.get("/api/saved/", function(req, res) {
	
	Article.find({}, function(error, doc) {

		//Log any errors
		if (error) {
			console.log(error);
		}
		else {
			res.json(doc);
		}
	});
});


// Route to save a single article
dbapp.post("/api/save", function(req, res) {

	// Check to see if an article with the title already exists in the database
	Article.count({ title: req.body.title }, function (error, count) {

		// If it isn't a duplicate, then:
		if (count < 1) {

			console.log("\n\n" + req.body.title + "\n\n");

			var newArt = new Article(req.body);

			newArt.save(function(error, doc) {

				// Log any errors
				if (error) {
					console.log(error);
				}	
				// Or log the doc
				else {
					res.json(doc);
				}			
			});

		} // end if isn't a duplicate

	}); // end Article count

}); // end route to save an article


// Route to delete a single article by ObjectID
dbapp.delete("/api/delete/:id", function(req, res) {

	var art = req.params;

		Article.find({ "_id": art.id }).remove()

		// And execute the query
		.exec(function(error, doc) {

			// Log any errors
			if (error) {
				console.log(error);
			}
			else {
				res.json(doc);
			}
		
		});

}); // end route to delete article


// Root route 
dbapp.get('/', (req, res) => {
	res.send(__dirname + '/public/index.html');
});


// Start the server to begin listening
dbapp.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});