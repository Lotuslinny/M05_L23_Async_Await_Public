const getMovieGenres = async () => {
  const data = await getData();
  const genre = data.genres;
  let id = genre.id;
  let name = genre.name;
  //console.log(name, id);
  genre.forEach(element => {
    let GenresList = document.getElementById("myTopMovie");
    let GenresListItem = document.createElement("li");
    let NameIdList = document.createTextNode("Genre naam: " + element.name + ", id " + element.id);
    GenresList.appendChild(GenresListItem);
    GenresListItem.appendChild(NameIdList);
    //console.log("Wat is dit" + GenresList);

  })
};
getMovieGenres();

const getFavoriteMovie = async () => {
  const dataFavoriteMovie = await getTitle();
  const movie = dataFavoriteMovie.movie_results;
  let title = movie.title;
  //console.log(title);
  movie.forEach(element => {
    const favorite = document.getElementById("myFavorite");
    const favoriteMovieTitle = document.createTextNode("Mijn favoriete film: " + element.title);
    favorite.appendChild(favoriteMovieTitle);
  })
};

getFavoriteMovie();

const getTitlesTopRatedMovies = async () => {
  const dataTopRated = await getTopRatedMovies();
  const toprated = dataTopRated.results;
  toprated.forEach(element => {
    let TopRatedList = document.getElementById("myTopRated");
    let TopRatedListItem = document.createElement("li");
    let TitlesTopRatedMoviesList = document.createTextNode(element.title);
    TopRatedList.appendChild(TopRatedListItem);
    TopRatedListItem.appendChild(TitlesTopRatedMoviesList);
  })
};
getTitlesTopRatedMovies();


const getTopRatedActionMovies = async () => {
  const dataGenreAction = await getDataGenreAction();
  const topratedgenreaction = dataGenreAction.results;
  topratedgenreaction.forEach(element => {
    let TopRatedActionList = document.getElementById("myTopRatedAction");
    let TopRatedActionListItem = document.createElement("li");
    let TitlesTopRatedActionMoviesList = document.createTextNode(element.title);
    TopRatedActionList.appendChild(TopRatedActionListItem);
    TopRatedActionListItem.appendChild(TitlesTopRatedActionMoviesList);
  })
};

getTopRatedActionMovies();


const getTitlesMovies1975 = async () => {
  const dataMovies1975 = await getDataMovie1975();
  const movies1975 = dataMovies1975.results;
  movies1975.forEach(element => {
    let Movies1975List = document.getElementById("myMovies1975");
    let Movies1975ListItem = document.createElement("li");
    let TitlesMovies1975List = document.createTextNode(element.title);
    Movies1975List.appendChild(Movies1975ListItem);
    Movies1975ListItem.appendChild(TitlesMovies1975List);
  })
};
getTitlesMovies1975();


