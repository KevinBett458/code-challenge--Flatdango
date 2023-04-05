# code-challenge-Flatdango
<div align="center">
<h1>Flatdango</h1>
</div>
<h2>Requirements</h2>
  <ul>
    <li>A web browser</li>
    <li>A local web server</li>
    <li>Node.js installed</li>
    <li>Git</li>
  </ul>
  <h2>Installation</h2>
  <ol>
    <li>Clone the repository to your local machine using the following command:</li>
    <code>git clone git@github.com:KevinBett458/code-challenge-Flatdango.git</code>
    <li>Navigate to the project directory using the following command:</li>
    <code>cd Flatdango</code>
    <li>Install the required dependencies using the following command:</li>
    <code>npm i json-server</code>
    <li>Start the JSON Server using the following command:</li>
    <code>npm run db</code>
    <li>Open your web browser and navigate to http://localhost:3000 to view the application.</li>
  </ol>
<h2>Features</h2>
<p>The system has the following features:</p>
<ul>
  <li>You can view a list of movies with their title, poster, runtime, showtime, and available tickets.</li>
  <li>You can select a movie from the list to view its details, including its poster, title, runtime, showtime, and available tickets.</li>
  <li>Buy a ticket for the selected movie, which updates the ticket count and available tickets on the frontend and server.</li>
</ul>
<h2>Code Overview</h2>
<p>The system is built using JavaScript and interacts with a JSON server to store and retrieve movie data. Here is an overview:</p>
<ul>
  <li>index.html: The main HTML file that displays the movie list and movie details.</li>
  <li>style.css: The main CSS file that styles the HTML elements.</li>
  <li>script.js: The main JavaScript file that interacts with the JSON server to display, add, update, and delete movie data.</li>
    <li>db.json: It is used to store the movie data in a JSON format.</li>
</ul>
<p>The script.js file contains the following functions:</p>
<ul>
  <li>fetchMoviesList: Fetches all movies from the server and adds them to the movie list.</li>
  <li>renderMovieDetails: Renders the movie details for a selected movie on the HTML page.</li>
  <li>fetchMovieDetails: Fetches a specific movie from the server and renders its details on the HTML page.</li>
</ul>
<h2>Conclusion</h2>
<p>Flatdango is a simple example of how JavaScript can interact with a JSON server to build dynamic web applications. With some additional features and improvements, it could be turned into a fully-functional ticket booking system.</p>
 <h2>Author</h2>
  <p>Kevin Bett.</p>
  <h2>License</h2>
<p>MIT LICENSE *Copyright (c) {2023} KEVIN BETT</a></p>








