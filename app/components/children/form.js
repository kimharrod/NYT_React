// Include React
var React = require("react");

var Form = React.createClass({

	// Set a generic state associated with the search term
	getInitalState: function() {
		return { term: "" };
	},

	// Respond to the user input
	handleChange: function(event) {

		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);

	},

	// When a user submits...
	handleSubmit: function(event) {

		// Prevent the form from trying to submit itself
		event.preventDefault();

		// Set the parent to have the search term
		this.props.setTerm(this.state.term);

		// Clear the input field after submit
		this.setState({ term: "" });

		// Set the parent to have the search start date
		this.props.setStart(this.state.start);

		// Clear the input field after submit
		this.setState({ start: "" });

		// Set the parent to have the search end date
		this.props.setEnd(this.state.end);

		// Clear the input field after submit
		this.setState({ end: "" });



	},


