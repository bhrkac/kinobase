const sortMovies = (films, { sortBy, ascending }) => {
  if (ascending) {
    return films.concat().sort((a, b) => {
        if (sortBy === 'title') {
          return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1;
        }
        else if (sortBy === 'year') {
          return a.year < b.year ? 1 : -1;
        }
        else if (sortBy === 'director') {
          return a.director.toLowerCase() < b.director.toLowerCase() ? 1 : -1;
        }
        else if (sortBy === 'imdbRating') {
          return a.imdbRating < b.imdbRating ? 1 : -1;
        }
      });
  } else {
    return films.concat().sort((a, b) => {
        if (sortBy === 'title') {
          return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
        }
        else if (sortBy === 'year') {
          return a.year > b.year ? 1 : -1;
        }
        else if (sortBy === 'director') {
          return a.director.toLowerCase() > b.director.toLowerCase() ? 1 : -1;
        }
        else if (sortBy === 'imdbRating') {
          return a.imdbRating > b.imdbRating ? 1 : -1;
        }
      })
  }; 
};

export default sortMovies;

/* const sortMovies = (props) => {

  if (this.sorted == "desc") {
    this.setState((prevState) => ({
      movies: prevState.movies.sort((this.propComparator(criteria))
      )
    }));
    this.sorted = "asc";
  }
  else {
    this.setState((prevState) => ({
      movies: prevState.movies.reverse((this.propComparator(criteria))
      )
    }));
    this.sorted = "desc";
  };
}; */