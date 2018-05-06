import { createStore, combineReducers } from 'redux';
import filmReducer from '../reducers/filmReducer';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      films: filmReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
