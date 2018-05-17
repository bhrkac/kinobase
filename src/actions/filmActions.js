// ADD_MOVIE
export const addMovie = (
  {
    id = '',
    title = '',
    year = '',
    director = '',
    writer = '',
    imdbRating = '',
    actors = '',
    plot = '',
    genre = '',
    poster = '',
    runtime = '',
    country
  } = {}
) => ({
  type: 'ADD_MOVIE',
  movie: {
    id,
    title,
    year,
    director,
    writer,
    imdbRating,
    actors,
    plot,
    genre,
    poster,
    runtime,
    country
   }
});


// REMOVE_MOVIE
export const removeMovie = ({ id } = {}) => ({
  type: 'REMOVE_MOVIE',
  id
});

