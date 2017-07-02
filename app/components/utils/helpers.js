// Include the axios package for performing HTTP requests
// Axios is a promise-based alternative to request
// Include moment to convert date format
var axios = require("axios");
var moment = require("moment");

// Helper functions
var helpers = {

	// Function to take in a date range and search the NYTimes website
	runQuery: function(query, start, end) {

	  console.log("start: " + start + " end: " + end);

  	var startObj = moment(start, 'YYYY-MM-DD');
  	var startString = startObj.format('YYYYMMDD');
  	console.log(startString);

  	var endObj = moment(end, 'YYYY-MM-DD');
  	var endString = endObj.format('YYYYMMDD');
  	console.log(endString);

  	// Correct an error if user enters a start date that is after the end date
  	if (startString > endString) {

  		var tempString = startString;
  		startString = endString;
  		endString = tempString;

  	} // end date entry error correction

  		// Search for articles
	    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + '?' + $.param({
	        'api-key': "55a43f370ac74c80aa394fdbf825832d",
	        'q': query,
	        'begin_date': startString,
	        'end_date': endString
	    });

	    // AJAX call to query the NewYorkTimes story archive
	    return axios.get(queryURL).then(function(res) {

	    	var story =[];

	    	for (var i=0; i < res.data.response.docs.length; i++) {

	    		story.push({

	    		  title: res.data.response.docs[i].headline.main,
	    		  url: res.data.response.docs[i].web_url,
	    		  date: res.data.response.docs[i].pub_date,
	    		  _id: res.data.response.docs[i]._id
	    		
	    		});
	    	}

	    	return story;

	    });

	}, // end runQuery function

	// getSaved function that pulls saved records from the mongoDB
	getSaved: () => {

		return $.ajax({
			url: '/api/saved/',
			type: 'get'
		})
		  	.done(function(data) {

		  		var story = [];

			  	// Build an array of the saved articles
			  	for (var i=0; i < data.length; i++) {

			  		var arts = Object.keys(data).map(function(s) {

			  			story.push({
			  				title: data[s].title,
			  				url: data[s].url,
			  				date: data[s].date,
			  				id: data[s]._id
			  			});

			  		});

			  	} // end for loop
			  	
			  		return story;

		  	}); // end ajax callback

	}, // end getSaved

}; // end helpers

// Export the helpers object (includes runQuery and getSaved)
module.exports = helpers;
