import { refCount } from "rxjs/operators";

const filmReducerDefaultState = [
  {
    id: 'tt0090605',
    title: 'Aliens',
    year: '1986',
    director: 'James Cameron',
    imdbRating: '8.4',
    actors: 'Sigourney Weaver, Carrie Henn, Michael Biehn, Paul Reiser',
    plot: 'Ellen Ripley is rescued by a deep salvage team after being in hypersleep for 57 years. The moon that the Nostromo visited has been colonized, but contact is lost. This time, colonial marines have impressive firepower, but will that be enough?',
    genre: 'Action, Adventure, Sci-Fi',
    poster: 'https://ia.media-imdb.com/images/M/MV5BYzVlMWViZGEtYjEyYy00YWZmLThmZGEtYmM4MDZlN2Q5MmRmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: '137 min',
    country: 'USA'
  },
  {
    id: 'tt0052357',
    title: 'Vertigo',
    year: '1954',
    director: 'Alfred Hitchcock',
    imdbRating: 8.4
  },
  {
    id: 'tt0057869',
    title: 'Band of Outsiders',
    year: '1964',
    director: 'Jean-Luc Godard',
    imdbRating: 7.8
  },
  {
    id: 'tt0079501',
    title: 'Mad Max',
    year: '1979',
    director: 'George Miller',
    imdbRating: '7.0',
    actors: 'Mel Gibson, Joanne Samuel, Hugh Keays-Byrne, Steve Bisley',
    plot: 'In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.',
    genre: 'Action, Adventure, Sci-Fi',
    poster: 'https://ia.media-imdb.com/images/M/MV5BMTM4Mjg5ODEzMV5BMl5BanBnXkFtZTcwMDc3NDk0NA@@._V1_SX300.jpg',
    runtime: '88 min',
    country: 'Australia'
  }
];

export default (state = filmReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        action.movie
      ];
    case 'REMOVE_MOVIE':
      return state.filter(({ title }) => title !== action.title);
    default:
      return state;      
  }
}
