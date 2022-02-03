var sectionCardSerie = document.getElementById("cardSerie");
var sectionCardMovies = document.getElementById("cardMovie");
var header = document.querySelector("header");
var netflixSeries = [];
var netflixMovies = [];
const API_KEY = ""; // Coloque aqui sua API_KEY do TMDB
const URL_SERIES = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&page=1&timezone=America%2FSao_Paulo&with_networks=213&without_genres=99&include_null_first_air_dates=false`;
const URL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

/*Função realiza a requisição na API trazendo as series*/
(function getApiSeries() {
  fetch(URL_SERIES)
    .then((res) => res.json())
    .then((json) => {
      netflixSeries = json.results;
    });
})();

/*Função realiza a requisição na API trazendo os filmes*/
(function getApiMovies() {
  fetch(URL_MOVIES)
    .then((res) => res.json())
    .then((json) => {
      netflixMovies = json.results;
    });
})();

/*Função que cria os Cards*/
function createCardsSerie() {
  netflixSeries.forEach((item) => {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.classList.add("card-img");
    div.classList.add("item");

    div.appendChild(img);
    img.src += `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    sectionCardSerie.appendChild(div);
  });
  return sectionCardSerie;
}

function createCardsMovie() {
  netflixMovies.forEach((item) => {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.classList.add("card-img");
    div.classList.add("item");

    div.appendChild(img);
    img.src += `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    sectionCardMovies.appendChild(div);
  });
  return sectionCardMovies;
}
window.addEventListener("scroll", function () {
  header.classList.toggle("active", window.scrollY > 0);
});

setTimeout(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
}, 2000);
window.setTimeout(createCardsSerie, 1000);
window.setTimeout(createCardsMovie, 1000);
/*TODO
  Função que cria os elementos poderia ser refatorada e receber parâmetros,
  assim poderia ser reutilizada já que cria a mesma estrutura de elementos. 
 */
