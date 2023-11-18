
let acaVaLaAPIKey = '12f29e6635ed0ee57e31999f00b1e829';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmYyOWU2NjM1ZWQwZWU1N2UzMTk5OWYwMGIxZTgyOSIsInN1YiI6IjY1NTU5MTVlNTM4NjZlMDBmZjA3MDAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ceBn6bgY-X2abPA_Lpk9hC8S2-qKcHYtWJgzu7MoH8'
  }
};

const urlParams = new URLSearchParams(window.location.search);
const serieId = urlParams.get('id');
console.log('ID de la serie:', serieId);


let DetalleSerie = `https://api.themoviedb.org/3/tv/${serieId}?api_key=${acaVaLaAPIKey}`;

function mostrarDetalleSerie(detalle) {
  const container = document.querySelector('.movie-det');

  const serieTitle = document.createElement('h3');
  serieTitle.textContent = detalle.name;

  const serieImage = document.createElement('img');
  serieImage.src = `https://image.tmdb.org/t/p/w500${detalle.poster_path}`;
  serieImage.alt = detalle.name;

  const serieOverview = document.createElement('p');
  serieOverview.textContent = detalle.overview;

  const serieReleaseDate = document.createElement('p');
  serieReleaseDate.textContent = `Fecha de Estreno: ${detalle.first_air_date}`;

  const serieDuration = document.createElement('p');
  serieDuration.textContent = `Duración: ${detalle.runtime} episodios`;

  const serieRating = document.createElement('p');
    serieRating.textContent = `Puntuación en IMDB: ${detalle.vote_average}/10`;


  const serieGenre = document.createElement('p');
  serieGenre.textContent = `Género: ${detalle.genres.map(genre => genre.name).join(', ')}`;

  container.appendChild(serieTitle);
  container.appendChild(serieImage);
  container.appendChild(serieOverview);
  container.appendChild(serieReleaseDate);
  container.appendChild(serieDuration);
  container.appendChild(serieRating);
  container.appendChild(serieGenre);
}

fetch(DetalleSerie, options)
  .then(response => response.json())
  .then(data => mostrarDetalleSerie(data))
  .catch(err => console.error(err));
