# NC News

Deployed version:"https://nc-news-rv.netlify.app"

General info:
This project is a web application called "NC News", a website created to allow users to read articles, post and delete comments and vote on articles. It was created with a React front-end and a Node.js/express back-end with a PostgresSQL as a database.

Features:
- Read individual articles by clicking the "Read now" buttons on the Home Screen
- Upvote on the inidividual article by clicking the "Upvote" button
- Comment on these individual articles by adding your comment and clicking "Submit"
- Delete your own comments by clicking the "X" button on your comments
- Click "Topic" to be redirected to a page with the topics
- Click on a topic to be redirected to a page which lists the articles linked to this topic
- Sort the articles by date, comment count, and votes by using the "Sort by" dropdown, and change from asc and desc 
- Click "Home" and "Topics" to be redirected to the corresponding page.

Back-end:
https://github.com/rahulvital/rahul-vital-be-nc-news.git

Requirements:
- Node: v18.19.0

To run:
1. Open terminal, in an appropriate folder, run the code: git clone https://github.com/rahulvital/rahul-vital-be-nc-news.git
2. cd be-nc-news
3.  In the root of your be, create an ".env.development" file (no file extension), write in the PGDATABASE=nc_news database.
4. In the root of your be, create an ".env.test" file (no file extension), and write in the PGDATABASE=nc_news_test database.
5. Run "npm install"
6. Create a .gitignore file (no file extensions), and add the .env files by writing ".env.*" and "node_modules" on seperate lines.

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)