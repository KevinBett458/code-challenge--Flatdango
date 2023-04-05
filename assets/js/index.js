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
    fetch(`${BASE_URL}/films/1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(filmData => {
        const capacity = Number(filmData.capacity);
        const ticketsSold = Number(filmData.tickets_sold);
        const availTickets = isNaN(capacity) || isNaN(ticketsSold) ? "N/A" : capacity - ticketsSold;
  
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
  

// get the menu items
const menuItems = document.querySelectorAll('.menu-item');

// add event listener to each menu item
menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    // get the ID of the selected movie from the data attribute
    const movieId = menuItem.dataset.movieId;

    // send a GET request to the server to retrieve the movie details
    fetch(`${BASE_URL}/films/${movieId}`)
      .then(response => response.json())
      .then(movieData => {
        // update the movie details on the frontend
        const posterImg = document.getElementById('poster-img');
        posterImg.src = movieData.poster_url;

        const movieTitle = document.getElementById('movie-title');
        movieTitle.textContent = movieData.title;

        const movieRuntime = document.getElementById('movie-runtime');
        movieRuntime.textContent = `Runtime: ${movieData.runtime} minutes`;

        const movieShowtime = document.getElementById('movie-showtime');
        movieShowtime.textContent = `Showtime: ${movieData.showtime}`;

        const availableTickets = document.getElementById('avail-tickets');
        availableTickets.textContent = `${movieData.capacity - movieData.tickets_sold} tickets available`;
      })
      .catch(error => {
        console.error('Cannot get movie details:', error);
      });
  });
});




