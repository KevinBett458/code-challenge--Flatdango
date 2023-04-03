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

// Use HTML elements to display the movie details
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

// Get the ul element where we will put the movie titles
const filmsList = document.getElementById('films');

// Make a GET request
fetch(`${BASE_URL}/films`)
  .then(response => response.json())
  .then(json => {
// Remove any existing child elements in the ul
    while (filmsList.firstChild) {
      filmsList.removeChild(filmsList.firstChild);
    }

// Loop through the movie data and create a new li element for each movie title
    json.forEach(movie => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <div>
          <h3>${movie.title}</h3>
          <p>${movie.runtime} min</p>
          <p>${movie.showtime}</p>
          <p>${movie.description}</p>
        </div>
      `;
      li.classList.add("film", "item");
      filmsList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error fetching movies:', error);
  })

const buyTicketButton = document.getElementById('buy-ticket');
// When the button is clicked, send a POST request to the server to buy a ticket
buyTicketButton.addEventListener('click', () => {
  fetch(`${BASE_URL}/films/1/buy-ticket`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(filmData => {
// Show available tickets from the theater's capacity and the number of tickets sold
      const availTickets = filmData.capacity - filmData.tickets_sold;

// Update the available tickets text on the frontend
      const movieTickets = document.getElementById('avail-tickets');
      movieTickets.textContent = `${availTickets} tickets available`;

// If there are no more tickets available, disable the "Buy Ticket" button
      if (availTickets === 0) {
        buyTicketButton.disabled = true;
      }
    })
    .catch(error => {
      console.error('Cannot buy ticket:', error);
    });
});



