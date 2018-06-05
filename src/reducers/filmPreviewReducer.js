const previewReducerDefaultState = [{
  id: 'tt0090605',
  title: 'Aliens',
  year: '1986',
  poster: 'https://ia.media-imdb.com/images/M/MV5BYzVlMWViZGEtYjEyYy00YWZmLThmZGEtYmM4MDZlN2Q5MmRmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
},
{
  id: '342',
  title: 'Film 2',
  year: '1988',
  poster: ''
}];

export default (state = previewReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE_PREVIEWS':
      return action.movie;
    default:
      return state;
  }
}