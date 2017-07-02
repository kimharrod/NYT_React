// Include React
var React = require("react");

// Component that displays article search results and saves articles to database
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

	// Render the search term results component and set up save buttons
	render: function() {

		// "arts" is an object containing the search term results (i.e. articles)
		let arts = this.props.article;
		let saveFunction = this.saveStory;

		// Iterate through the object containing the search results and prepare for display
		var artList = Object.keys(arts).map(function(s){
			return (
				<li key={arts[s].title} >Title: {arts[s].title} <button onClick={saveFunction} id={arts[s]._id} data-title={arts[s].title} data-url={arts[s].url} data-date={arts[s].date} type="button" className="btn btn-muted pull-right">Save</button><br/>
					URL: <a href={arts[s].url} target="_blank">{arts[s].url}</a> <br/>
					Date: {arts[s].date}<br/>
				</li>

			) // end prepare for display
		
		}); // end iterate function 

		return (

			<div className="panel panel-default">

				<div className="panel-heading">
					<h3 className="panel-title text-center">Results</h3>
				</div>

				<div className="panel-body">

					<ol>
					{artList}
					</ol>

				</div>

			</div>

		); // end jsx
	
	} // end render function

}); // end article search results component

// Export the component back for use in other files
module.exports = Results;