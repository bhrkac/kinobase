import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getLastMovie from '../selectors/getLastMovie';
import { showLastMovie } from '../actions/filterActions';
import { removeMovie } from '../actions/filmActions';


const MoviePreview = (props) => {
      console.log('movie id: ', props.lastFilm.id);
  return (
    <div style={{ display: props.filters.showPreview ? 'flex' : 'none' }}>
    <div className="preview">
      <div className="preview-poster"><img src={props.lastFilm.poster} alt="Poster not available"/></div>
  { /* <div className="preview-info">  */ }
        <div className="preview-title">{props.lastFilm.title}</div>
        <div className="preview-subtitle">{props.lastFilm.director}, {props.lastFilm.year}.</div>
  { /*    </div>  */ }
    { /* <div className="preview-actors">Starring: {props.films.actors}</div> */}
  { /*     <div className="preview-plot">"{props.films.plot}"</div>   */ }
  { /*     <div className="preview-rating">&#9733;{props.films.imdbRating}</div>  */ }
  { /*     <div className="preview-info">
        <div className="preview-info__tags">{props.films.country}</div>
        <div className="preview-info__tags">{props.films.genre}</div>
        <div className="preview-info__tags">{props.films.runtime}</div>
      </div>  */ }
      <div className="preview-buttons">
        <button onClick={(e) => {
          props.dispatch(showLastMovie(false))
        }} className="preview-button ">&#10003;</button>
      
        <button onClick={(e) => {
          props.dispatch(removeMovie(props.lastFilm.id))
        }} className="preview-button ">&times;</button>
      </div>
    </div>
   </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    films: state.films,
    lastFilm: getLastMovie(state.films),
    filters: state.filters
  }
}

export default connect(mapStateToProps)(MoviePreview);