//const fetch = require('node-fetch'); //voor in de terminal console.log.

const getData = async () => {
  let API_KEY = "x";
  const totaleApiLink = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  //console.log("url: " + totaleApiLink);
  try {
    const res = await fetch(totaleApiLink, { method: 'GET' });
    return await res.json();
  }
  catch (error) {
    console.log("Catch: " + error);
  }
};
getData();

async function getTitle() {
  let API_KEYFav = "?api_key=x";
  const apiUrl = "https://api.themoviedb.org/3/find/";
  const movieId = "tt0119822";
  const totaleApiLinkFav = apiUrl + movieId + API_KEYFav + "&language=en-US&external_source=imdb_id";
  // console.log("url: " + totaleApiLinkFav);
  try {
    const res = await fetch(totaleApiLinkFav, { method: 'GET' });
    return await res.json();
  }
  catch (error) {
    console.log("Catch: " + error);
  }
};
getTitle();

//https://api.themoviedb.org/3/movie/top_rated?api_key=x&language=en-US&page=1

const getTopRatedMovies = async () => {
  let API_KEYTop = "?api_key=x";
  const totaleApiLinkTop = "https://api.themoviedb.org/3/movie/top_rated" + API_KEYTop + "&language=en-US&page=1";
  //console.log("url: " + totaleApiLinkTop);
  try {
    const res = await fetch(totaleApiLinkTop, { method: 'GET' });
    return await res.json();
  }

  catch (error) {
    console.log("Catch: " + error);
  }
};
getTopRatedMovies();

const getDataGenreAction = async () => {
  let API_KEYAction = "?api_key=x";
  const totaleApiLinkAction = "https://api.themoviedb.org/3/discover/movie" + API_KEYAction + "&sort_by=vote_average.desc&page=1&with_genres=28";
  console.log("url Action " + totaleApiLinkAction);
  ///////////// https://api.themoviedb.org/3/discover/movie?api_key=x&sort_by=vote_average.desc&page=1&with_genres=28
  try {
    const res = await fetch(totaleApiLinkAction, { method: 'GET' });
    return await res.json();
  }
  catch (error) {
    console.log("Catch: " + error);
  }
};

getDataGenreAction();

//https://api.themoviedb.org/3/discover/movie?api_key=x&page=1&primary_release_year=1975
const getDataMovie1975 = async () => {
  let API_KEY1975 = "?api_key=x";
  const totaleApiLink1975 = "https://api.themoviedb.org/3/discover/movie" + API_KEY1975 + "&page=1&primary_release_year=1975";
  try {
    const res = await fetch(totaleApiLink1975, { method: 'GET' });
    return await res.json();
  }
  catch (error) {
    console.log("Catch: " + error);
  }
};

getDataMovie1975();
