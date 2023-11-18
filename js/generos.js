document.addEventListener("DOMContentLoaded", () => {
    const genresContainer = document.querySelector("#genres-container");

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmYyOWU2NjM1ZWQwZWU1N2UzMTk5OWYwMGIxZTgyOSIsInN1YiI6IjY1NTU5MTVlNTM4NjZlMDBmZjA3MDAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ceBn6bgY-X2abPA_Lpk9hC8S2-qKcHYtWJgzu7MoH8'
        }
    };

    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(response => response.json())
        .then(data => {
            genresData = data.genres; 

            genresContainer.classList.add("genres-row");

            data.genres.forEach(genre => {

                const genreElement = document.createElement("div");
                genreElement.classList.add("genre");
                genreElement.textContent = genre.name;

                genreElement.addEventListener("click", function () {
                    window.location.href = `./detail-generos.html?genreId=${genre.id}`;
                });

                genresContainer.appendChild(genreElement);
            });
        })
        .catch(error => {
            console.error("Error al obtener géneros:", error);
        });
          
          fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
            .then(response => response.json())
            .then(data => {genresData = data.genres; 

                genresContainer.classList.add("genres-row");
    
                data.genres.forEach(genre => {
    
                    const genreElement = document.createElement("div");
                    genreElement.classList.add("genre");
                    genreElement.textContent = genre.name;
    
                    genreElement.addEventListener("click", function () {
                        window.location.href = `./detail-generos.html?serieId=${genre.id}`;

                    });
    
                    genresContainer.appendChild(genreElement);
                });})
            .catch(err => console.error(err));
});


