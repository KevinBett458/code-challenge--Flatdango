document.addEventListener("DOMContentLoaded", () => {
  fetchFilms();
});

const BASE_URL = "http://localhost:3000";

//Fetch data on films from the server
const fetchFilms = () => {
  fetch(`${BASE_URL}/films`, {
    method: `GET`,
    headers: {
      "Content-Type" : "application/json",
    },
  })
  .then((response) => response.json())
  .then(json => {
    json.map(film => {
      console.log(film)
    })
  })
  .catch((error) => {
    console.log(error);
  });
}

// GET request to retrieve first movie data from the API
fetch(`${BASE_URL}/films/1`)
  .then(response => response.json())
  .then(movieData => {
    // Show available tickets from the theater's capacity and the number of tickets sold
    const availableTickets = movieData.capacity - movieData.tickets_sold;

    // Use the HTML elements to display the movie details
    const posterImage = document.getElementById('poster-img');
    const movieTitle = document.getElementById('movie-title');
    const movieRuntime = document.getElementById('movie-runtime');
    const movieShowtime = document.getElementById('movie-showtime');
    const movieTickets = document.getElementById('available-tickets');

    // Set the text and image content of the HTML elements using the movie data
    posterImage.src = movieData.poster;
    movieTitle.textContent = movieData.title;
    movieRuntime.textContent = `${movieData.runtime} minutes`;
    movieShowtime.textContent = movieData.showtime;
    movieTickets.textContent = `${availableTickets} tickets available`;
  })
  .catch(error => {
    console.error('Cannot fetch movie details:', error);
  });

