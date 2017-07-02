// Include React
var React = require("react");

var Form = React.createClass({

	// Set a generic state associated with the search term
	getInitialState: function() {
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

		// Prevent the form from trying to submit it self
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

	// Here we describe the component render method
	// We use local states & respond through the props
	// Props are data & methods passed down from parent to child component
	render: function() {

		return (

			<div className="panel panel-default">

				<div className="panel-heading">
					<h3 className="panel-title text-center">Search for Articles</h3>
				</div>

				<div className="panel-body text-center">

					<form onSubmit={this.handleSubmit}>
						<div className="form-group">

							<input
								type="text"
								value={this.state.term}
								className="form-control"
								id="term"
								placeholder="Search term"
								onChange={this.handleChange}
								required
							/>

							<br/>

							<input
								type="date"
								value={this.state.start}
								className="form-control"
								id="start"
								placeholder="Start date YYYYMMDD"
								onChange={this.handleChange}
								required
							/>

							<br/>

							<input
								type="date"
								value={this.state.end}
								className="form-control"
								id="end"
								placeholder="End date YYYYMMDD"
								onChange={this.handleChange}
								required
							/>

							<br/>

							<button
								className="btn btn-primary btn-muted"
								type="submit"
							>
							Submit
							</button>

						</div>
					</form>
				</div>
			</div>

		); // end jsx

	} // end render method

}); // end Form component


// Export the component back for use in other files
module.exports = Form;


