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
