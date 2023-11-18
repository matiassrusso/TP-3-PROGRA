
let acaVaLaAPIKey = '12f29e6635ed0ee57e31999f00b1e829';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmYyOWU2NjM1ZWQwZWU1N2UzMTk5OWYwMGIxZTgyOSIsInN1YiI6IjY1NTU5MTVlNTM4NjZlMDBmZjA3MDAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ceBn6bgY-X2abPA_Lpk9hC8S2-qKcHYtWJgzu7MoH8'
  }
};

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
console.log('ID de la pelicula:', movieId);


let DetallePelicula = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${acaVaLaAPIKey}`;

function mostrarDetallePelicula(detalle) {
  const container = document.querySelector('.movie-det');

  const movieTitle = document.createElement('h3');
  movieTitle.textContent = detalle.title;

  const movieImage = document.createElement('img');
  movieImage.src = `https://image.tmdb.org/t/p/w500${detalle.poster_path}`;
  movieImage.alt = detalle.title;

  const movieOverview = document.createElement('p');
  movieOverview.textContent = detalle.overview;

  const movieReleaseDate = document.createElement('p');
  movieReleaseDate.textContent = `Fecha de Estreno: ${detalle.release_date}`;

  const movieDuration = document.createElement('p');
  movieDuration.textContent = `Duración: ${detalle.runtime}m`;

  const movieRating = document.createElement('p');
    movieRating.textContent = `Puntuación en IMDB: ${detalle.vote_average.toFixed(1)}/10`;


  const movieGenre = document.createElement('p');
  movieGenre.textContent = `Género: ${detalle.genres.map(genre => genre.name).join(', ')}`;

  container.appendChild(movieTitle);
  container.appendChild(movieImage);
  container.appendChild(movieOverview);
  container.appendChild(movieReleaseDate);
  container.appendChild(movieDuration);
  container.appendChild(movieRating);
  container.appendChild(movieGenre);
}

fetch(DetallePelicula, options)
  .then(response => response.json())
  .then(data => mostrarDetallePelicula(data))
  .catch(err => console.error(err));
