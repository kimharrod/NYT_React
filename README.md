# NYT_React
Search and save articles from the New York Times

[NYTReact.fios.vc](http://NYTReact.fios.vc/)

### Overview

NYTReact is a full-stack one-page site implemented with a MERN stack - MongoDB/Mongoose, Express, React and Node.

You start the app from the command line using "node server.js".


### User Interface


NYTReact works as follows:

1. When a user arrives at the NYTReact site, they can search for articles from the New York Times by entering a search term and a date range.   

![NYTReact landing page](http://fios.vc/NYTReactsearch.jpg "Landing Page")

2. A search returns a list of articles including the article title, date and a link to the full text of the article, which opens in a separate tab.

3. There is a save button to the right of each article, allowing the user to save articles for later reference. 

![NYTReact search results](http://fios.vc/NYTReactresults.jpg "Search results")

4. When the save button for an article is clicked, the article is added to the database of saved articles, and appears in the Saved Articles section.

5. Every time an article is saved or deleted, the Saved Articles section is refreshed.

![NYTReact saved article](http://fios.vc/NYTReactsaved.jpg "Saved article")


### Dependencies and Packages

The app requires the 'mongoose', 'express', 'react', 'react-dom', request', 'axios', logger', 'morgan', 'moment' and 'body-parser' npm packages.

Development dependencies are as follows: 'webpack', babel-core' 'babel-loader', and'babel-preset-es2015'.
  
  
The app uses MongoDB for its database and Mongoose to model the application data.