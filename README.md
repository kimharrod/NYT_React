# NYT_React
Search and save articles from the New York Times

[NYTReact.fios.vc](http://NYTReact.fios.vc/)

### Overview

NYT_React is a full-stack one-page site implemented with a MERN stack - MongoDB/Mongoose, Express, React and Node.

You start the app from the command line using "node server.js".


### User Interface


NYT_React works as follows:

1. When a user arrives at the NYT_React site, they can search for articles from the New York Times using a date range.   



2. A search returns a list of articles including the article title, date and a link to the full text of the article, which opens in a separate tab.



3. There is a save button to the right of each article, allowing the user to save articles for later reference. Once the save button for an article is clicked, the button color is changed to gray.



4. Saved articles appear in a separate section below the search results. Save articles can also be deleted. Every time an article is saved or deleted, the saved articles view is refreshed.




### Dependencies and Packages

The app requires the 'mongoose', 'express', 'react', 'react-dom', request', 'axios', logger', 'morgan' and 'body-parser' npm packages.

Development dependencies are as follows: 'webpack', babel-core' 'babel-loader', and'babel-preset-es2015'.
  
  
The app uses MongoDB for its database and Mongoose to model the application data.