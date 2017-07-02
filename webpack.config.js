module.exports = {

	// Entry point of this react application
	entry: "./app/app.js",

	// Plain compiled javascript is output to this file
	output: {
		filename: "public/bundle.js"
	},

	// Transformations to be performed
	module: {
		rules: [
			{
			  // Work with files that have a .js or .jsx extenstion
			  test: /\.jsx?$/,

			  // Webpack will only process files in the app folder
			  include: /app/,
			  loader: "babel-loader",
			  query: {

			  	// Specific transformations used
			  	presets: ["react", "es2015"]

			  }

			}
		]
	},

	// Allows us to debug our react code in chrome dev tools
	devtool: "eval-source-map"

};