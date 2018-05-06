export default (films, id) => {
  return films.find((movie) => {
    return id === movie.id;
  }) 
};