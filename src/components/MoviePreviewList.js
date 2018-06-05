//new
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import getLastMovie from '../selectors/getLastMovie';
import { showPreview } from '../actions/filterActions';
import { removeMovie } from '../actions/filmActions';
import sortMovies from '../selectors/sortMovies';
import MoviePreview from './MoviePreview.js';

const MoviePreviewList = (props) => (
  <div style={{ display: props.filters.showPreview ? 'block' : 'none' }}>
    {props.filmPreviews.map((movie) => {
      return <MoviePreview key={movie.Id} {...movie} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    filmPreviews: state.filmPreviews,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(MoviePreviewList);
