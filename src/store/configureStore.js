import { createStore, combineReducers } from 'redux';
import filmReducer from '../reducers/filmReducer';
import filmPreviewReducer from '../reducers/filmPreviewReducer';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      films: filmReducer,
      filmPreviews: filmPreviewReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
