let acaVaLaAPIKey = '12f29e6635ed0ee57e31999f00b1e829';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmYyOWU2NjM1ZWQwZWU1N2UzMTk5OWYwMGIxZTgyOSIsInN1YiI6IjY1NTU5MTVlNTM4NjZlMDBmZjA3MDAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ceBn6bgY-X2abPA_Lpk9hC8S2-qKcHYtWJgzu7MoH8'
  }
};

let PelículasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`;

let SeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`;

let ActoresPopulares = `https://api.themoviedb.org/3/trending/person/week?language=en-US`;

function mostrarActores(actores) {
  const container = document.getElementById('actorsContainer');

  actores.forEach(actor => {
    const actorElement = document.createElement('div');
    actorElement.classList.add('movie'); 
    const actorLink = document.createElement('a');
    const actorImage = document.createElement('img');
    actorImage.src = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    actorImage.alt = actor.name;
    actorLink.appendChild(actorImage);

    const actorName = document.createElement('h3');
    actorName.textContent = actor.name;

    const actorKnownFor = document.createElement('p');
    const knownForMovie = actor.known_for.find(movie => movie.title || movie.name);
    actorKnownFor.textContent = `Conocido por: ${knownForMovie ? knownForMovie.title || knownForMovie.name : 'N/A'}`;

    actorElement.appendChild(actorLink);
    actorElement.appendChild(actorName);
    actorElement.appendChild(actorKnownFor);

    container.appendChild(actorElement);
  });
}

function mostrarContenido(data, containerId, tipo) {
  const container = document.getElementById(containerId);

  data.forEach(item => {
    const contentElement = document.createElement('div');
    contentElement.classList.add('movie');

    const contentLink = document.createElement('a');
    contentLink.href = `./detail-${tipo}.html?id=${item.id}`;
    const contentImage = document.createElement('img');
    contentImage.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    contentImage.alt = item.title || item.name; 
    contentLink.appendChild(contentImage);

    const contentTitle = document.createElement('h3');
    contentTitle.textContent = item.title || item.name; 

    const contentReleaseDate = document.createElement('p');
    contentReleaseDate.textContent = `Fecha de Estreno: ${item.release_date || item.first_air_date}`; 

    
    const favLink = document.createElement('a');
    favLink.href = 'favoritos.html';
    favLink.classList.add('fav');
    const starIcon = document.createElement('i');
    starIcon.classList.add('fa-solid', 'fa-star', 'fa-lg');
    favLink.appendChild(starIcon);

    contentElement.appendChild(contentLink);
    contentElement.appendChild(contentTitle);
    contentElement.appendChild(contentReleaseDate);
    contentElement.appendChild(favLink);

    container.appendChild(contentElement);
  });
}

fetch(PelículasPopulares, options)
  .then(response => response.json())
  .then(data => mostrarContenido(data.results, 'moviesContainer', "movie"))
  .catch(err => console.error(err));

fetch(SeriesPopulares, options)
  .then(response => response.json())
  .then(data => mostrarContenido(data.results, 'seriesContainer', "serie"))
  .catch(err => console.error(err));

fetch(ActoresPopulares, options)
  .then(response => response.json())
  .then(data => mostrarActores(data.results))
  .catch(err => console.error(err));
