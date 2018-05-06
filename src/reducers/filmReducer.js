import { refCount } from "rxjs/operators";

const filmReducerDefaultState = [
  {
    id: 'tt0069865',
    title: 'Charley Varrick',
    year: '1973',
    director: 'Don Siegel',
    imdbRating: 7.5
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
    id: 'tt0051380',
    title: 'Attack of the 50 Foot Woman',
    year: '1958',
    director: 'Nathan Juran',
    imdbRating: 5.1
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
