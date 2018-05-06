const filtersReducerDefaultState = {
  sortBy: 'title',
  ascending: false,
  id: ''
};

export default (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SORT_BY_TITLE':
      return {
        ...state,
        sortBy: 'title',
        ascending: !state.ascending
      };
    case 'SORT_BY_YEAR':
      return {
        ...state,
        sortBy: 'year',
        ascending: !state.ascending
      };    
    case 'SORT_BY_DIRECTOR':
      return {
        ...state,
        sortBy: 'director',
        ascending: !state.ascending
      };   
    case 'SORT_BY_RATING':
      return {
        ...state,
        sortBy: 'imdbRating',
        ascending: !state.ascending
      };  
    case 'GET_MOVIE_DETAIL':
      return {
        ...state
      };     
    default:
      return state;
  }
  

};