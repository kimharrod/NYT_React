# NYT_React
Search and save articles from the New York Times

[NYTReact.fios.vc](http://NYTReact.fios.vc/)

### Overview

NYT_React is a full-stack one-page site implemented with a MERN stack - MongoDB/Mongoose, Express, React and Node.

You start the app from the command line using "node server.js".


### User Interface


NYT_React works as follows:

1. When a user arrives at the NewsView site, the latest news articles from The Progressive (http://progressive.org) are scraped and displayed.  Handlebars is used for the inital article display. Cheerio is used for the web scraping.



2. When the user clicks on an article card, a modal appears with the article title, photo, description and comments (if any), as well as a text box to add comments, a "Save/Unsave Article" button and a link to read the full article.



3. The user can add a comment by typing in the text box, and clicking the "Add" button.



4. When the user hovers over an existing comment, an edit pencil icon appears. Clicking on the comment will activate the text for editing and display "OK" and "X" checkboxes to the right of the comment. After editing the text, the user checks "OK". To delete the comment, the user clicks the "X".



5. The user can save and unsave articles from the article modal.  A category menu at the top of the page can be used to display all articles or saved articles only.




### Dependencies and Packages

The app requires the 'express', 'mongoose', 'request', 'logger' and 'body-parser' npm packages.

The app uses MongoDB for its database and Mongoose to model the application data.