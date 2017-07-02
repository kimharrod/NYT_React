// Include React
var React = require("react");
var helpers = require("../utils/helpers");

// This is the saved component
var Saved = React.createClass({

	// Function to delete an article from MongoDB
	deleteStory: function(event) {
		event.preventDefault();

		var artId = event.target.getAttribute('data-id');

		// make ajax call with the article object
		$.ajax({
			url: '/api/delete/' + artId,
			type: 'delete'
		})
		  .done(function(data) {

		  });

		  this.props.rerenderSaved();
	},

	// Render the Saved component
	render: function() {

		let arts = this.props.article;
		let deleteFunction = this.deleteStory;

		// Iterate through the object containing the search results and prepare for display
		var artList = Object.keys(arts).map(function(s) {
			return (
				<li key={arts[s].title} >Title: {arts[s].title} <button onClick={deleteFunction} data-id={arts[s]._id} data-title={arts[s].title} data-url={arts[s].url} data-date={arts[s].date} type="button" className="btn btn-primary btn-muted pull-right">Delete</button><br/>
					url: <a href={arts[s].url} target="_blank">{arts[s].url}</a> <br/>
					Date: {arts[s].date}<br/>
				</li>
			
			) // end prepare for diplay

		}); // end iterate function  

		return (

			<div className="panel panel-default">

				<div className="panel-heading">
					<h3 className="panel-title text-center">Saved Articles</h3>
				</div>

				<div className="panel-body">

					<ol>
					{artList}
					</ol>

				</div>

			</div>

		); // end jsx

	} // end render function

});  // end Saved component

// Export the component for use in other files
module.exports = Saved;