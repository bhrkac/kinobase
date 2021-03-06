//new
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import getLastMovie from '../selectors/getLastMovie';
import { showPreview } from '../actions/filterActions';
import { removeMovie } from '../actions/filmActions';
import sortMovies from '../selectors/sortMovies';
import MoviePreview from './MoviePreview.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const MoviePreviewList = (props) => (
  <div style={{ display: props.filters.showPreview ? 'block' : 'none' }}>
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
    {props.filmPreviews.map((movie) => {
      return <MoviePreview key={movie.Id} {...movie} />;
    })}
    <p className="preview-subtitle">Movie not found? Please try refining the search.</p>
    </ReactCSSTransitionGroup>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filmPreviews: state.filmPreviews,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(MoviePreviewList);
