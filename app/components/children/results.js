// Include React
var React = require("react");

// Component that displays article search results
var Results = React.createClass({

	// Save article data to mongoDB
	saveStory: function(event){

		event.preventDefault();
		console.log("in saveStory");
		var artData = {

			title: event.target.getAttribute('data-title'),
			url: event.target.getAttribute('data-url'),
			date: event.target.getAttribute('data-date'),

		}

		// Gray back button if Save is clicked
		event.target.setAttribute('disabled', 'disabled');

		// Make ajax call with the article object
		// Saved article to the database
		$.ajax({
			url: '/api/save',
			type: 'post',
			data: artData
		})
		  .done(function(data) {
		  	console.log(data);
		  });

		  // Will re-render the Saved section (function in Main.js)
		  this.props.rerenderSaved();
	

	},

	

});