// Include React
var React = require("react");

// Include sub-components (children)
var Form = require("./children/Form");
var Results = require("./children/Results");
var Saved = require("./children/Saved");

// Include helper functions
var helpers = require("./utils/helpers");

// Main component
var Main = React.createClass({

	// Set the inital state and initialize instance (class) variables
	getInitialState: function() {

		return { searchTerm: "", results: "", saved: ""};
	},

	// Lifecycle method to run every time the main component loads
	// In order to have previously saved articles appear when the application is run
	componentDidMount: function() {

		helpers.getSaved().then(function(data) {

			this.setState({ saved: data });

		}.bind(this));
	},

	// Lifecycle method to run every time the main component updates its props or state
	componentDidUpdate: function(prevProps, prevState) {
		// Run a new serach, if the search data has been changed
		if (prevState.searchTerm !== this.state.searchTerm) {
			console.log("UPDATED");
			let start = "";
			let end = "";

			helpers.runQuery(this.state.searchTerm, this.state.searchStart, this.state.searchEnd).then(function(data) {

				this.setState({ results: data });

			}.bind(this));

		} // End if

	}, // End componentDidUpdate

	// Function to set search term
	setTerm: function(term) {
		this.setState({ searchTerm: term });
	},

	// Function to set search start date
	setStart: function(start) {
		this.setState({ searchStart: start });
	},

	// Function to set search end date
	setEnd: function(end) {
		this.setState({ searchEnd: end });
	},

	// Function to trigger refresh and rerender of saved article component
	rerenderSaved: function() {

		helpers.getSaved().then(function(data) {

			this.setState({ saved: data});

		}.bind(this));

	}, // End rerenderSaved
	

	// Render the main component
	render: function() {

		return (

			<div className="container">
				
				<div className="row">
					
					<div className="jumbotron">
						<h2 className="text-center">New York Times Article Search</h2>
						<p className="text-center">
							<em>Search and save articles for a given data range</em>
						</p>
					</div>
				
					<div className="col-md-6">
						<Form setTerm={this.setTerm} setStart={this.setStart} setEnd={this.setEnd} />
					</div>

					<div className="col-md-6">
						<Saved article={this.state.saved} rerenderSaved={this.rerenderSaved}/>
					</div>

					<div className="col-md-12">
						<Results article={this.state.results} rerenderSaved={this.rerenderSaved}/>
					</div>
		

				</div>

			</div>

		);

	}

});


// Export the component for use in other files
module.exports = Main;