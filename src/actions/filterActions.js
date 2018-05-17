
// SORT_BY_TITLE
export const sortByTitle = () => ({
  type: 'SORT_BY_TITLE'
});

// SORT_BY_YEAR
export const sortByYear = () => ({
  type: 'SORT_BY_YEAR'
});

// SORT_BY_DIRECTOR
export const sortByDirector = () => ({
  type: 'SORT_BY_DIRECTOR'
});

// SORT_BY_RATING
export const sortByRating = () => ({
  type: 'SORT_BY_RATING'
});

// GET_MOVIE_DETAIL
export const getMovieDetail = () => ({
  type: 'GET_MOVIE_DETAIL'
});

//SHOW_LAST_MOVIE
export const showLastMovie = (show) => ({
  type: 'SHOW_LAST_MOVIE',
  show
});