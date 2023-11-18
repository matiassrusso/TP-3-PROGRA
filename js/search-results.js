document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector("#busqueda");
    const button = document.querySelector("button");
    let clase = document.querySelector('.peliculas-container')
    let clase_vieja = document.querySelector('.default')
   
    button.addEventListener('click', (e) => {
        e.preventDefault()
        clase.classList.toggle('active')
        console.log(clase)
        clase_vieja.classList.toggle('active')
        let valorObt = searchForm.value
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmYyOWU2NjM1ZWQwZWU1N2UzMTk5OWYwMGIxZTgyOSIsInN1YiI6IjY1NTU5MTVlNTM4NjZlMDBmZjA3MDAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ceBn6bgY-X2abPA_Lpk9hC8S2-qKcHYtWJgzu7MoH8'
            }
          };
          
          console.log(valorObt)
          fetch(`https://api.themoviedb.org/3/search/multi?query=${valorObt}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => {response['results'].forEach(serie => {
                console.log(serie.title)
                if (serie.title !== undefined){
                const contentElement = document.createElement('div');
                contentElement.classList.add('movie');
                const contentLink = document.createElement('a');
                if(serie.media_type==='movie'){
                    contentLink.href = `./detail-movie.html?id=${serie.id}`;

                }
                else{
                    contentLink.href = `./detail-serie.html?id=${serie.id}`;
                }
                const contentImage = document.createElement('img');
               contentImage.src = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
                contentImage.alt = `${serie.title}`; 
                contentLink.appendChild(contentImage);
            
                const contentTitle = document.createElement('h3');
                contentTitle.textContent = serie.title; 
            
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
            
                clase.appendChild(contentElement);
                }
                }
                 );})
            .catch(error => {
                console.error("Error al realizar la búsqueda:", error);
            });
    

    })})
    

