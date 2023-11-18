let acaVaLaAPIKey = '12f29e6635ed0ee57e31999f00b1e829';

document.addEventListener("DOMContentLoaded", () => {
    const detailGenresContainer = document.querySelector("#detail-genres-container");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const genreId = urlParams.get('genreId')
    const serieId = urlParams.get('serieId')


    console.log(genreId);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmYyOWU2NjM1ZWQwZWU1N2UzMTk5OWYwMGIxZTgyOSIsInN1YiI6IjY1NTU5MTVlNTM4NjZlMDBmZjA3MDAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ceBn6bgY-X2abPA_Lpk9hC8S2-qKcHYtWJgzu7MoH8'
        }
      };
      if(genreId !== null)
    {
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`, options)
        .then(response => response.json())
        .then(response => {response['results'].forEach(movie => {
            const contentElement = document.createElement('div');
            contentElement.classList.add('movie');
        
            const contentLink = document.createElement('a');
            contentLink.href = `./detail-movie.html?id=${movie.id}`;
            const contentImage = document.createElement('img');
            contentImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            contentImage.alt = `${movie.title}`; 
            contentLink.appendChild(contentImage);
        
            const contentTitle = document.createElement('h3');
            contentTitle.textContent = movie.title; 
        
            const contentReleaseDate = document.createElement('p');
            contentReleaseDate.textContent = `Fecha de Estreno: ${movie.release_date || movie.first_air_date}`; 
        
        
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
        
            detailGenresContainer.appendChild(contentElement);
        
                        });})
        .catch(err => console.error(err));
    };
    
    if(serieId !== null)
    {
  
          fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${serieId}`, options)
          .then(response => response.json())
          .then(response => {response['results'].forEach(serie => {
              const contentElement = document.createElement('div');
              contentElement.classList.add('movie');
              const contentLink = document.createElement('a');
              contentLink.href = `./detail-serie.html?id=${serie.id}`;
              const contentImage = document.createElement('img');
              contentImage.src = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
              contentImage.alt = `${serie.title}`; 
              contentLink.appendChild(contentImage);
          
              const contentTitle = document.createElement('h3');
              contentTitle.textContent = serie.title + " " + serie.name; 
          
              const contentReleaseDate = document.createElement('p');
              contentReleaseDate.textContent = `Fecha de Estreno: ${serie.release_date || serie.first_air_date}`; 
          
          
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
          
              detailGenresContainer.appendChild(contentElement);
          
                          });})
          .catch(err => console.error(err));
        };
});
