// ADD_MOVIE_PREVIEWS
export const addMoviePreviews = (movie = {}
) => ({
  type: 'ADD_MOVIE_PREVIEWS',
  movie: movie
});


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

// REMOVE_MOVIE_PREVIEW
export const removeMoviePreview = ( id  = '' ) => ({
  type: 'REMOVE_MOVIE_PREVIEW',
  id
});
