import React from 'react';
import { connect } from 'react-redux';
import TableHeader from './TableHeader';
import Movie from './Movie';
import sortMovies from '../selectors/sortMovies';

const MovieList = (props) => (
  <div>
    <TableHeader />
    {props.films.map((movie) => {
      return <Movie key={movie.title} {...movie} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    films: sortMovies(state.films, state.filters)
  };
};

export default connect(mapStateToProps)(MovieList);
