import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { addMovie } from './actions/filmActions';
import { sortByTitle, sortByYear, sortByDirector, sortByRating } from './actions/filterActions';
import configureStore from './store/configureStore';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  console.log('app.js - store.getState: ', state);
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));