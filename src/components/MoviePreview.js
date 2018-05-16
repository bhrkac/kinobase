import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getLastMovie from '../selectors/getLastMovie';

const MoviePreview = (props) => {
  return (
    <div className="preview">
      <div className="preview-poster"><img src={props.films.poster} alt="Poster not available"/></div>
  { /* <div className="preview-info">  */ }
        <div className="preview-title">{props.films.title}</div>
        <div className="preview-subtitle">{props.films.director}, {props.films.year}.</div>
  { /*    </div>  */ }
    { /* <div className="preview-actors">Starring: {props.films.actors}</div> */}
  { /*     <div className="preview-plot">"{props.films.plot}"</div>   */ }
  { /*     <div className="preview-rating">&#9733;{props.films.imdbRating}</div>  */ }
  { /*     <div className="preview-info">
        <div className="preview-info__tags">{props.films.country}</div>
        <div className="preview-info__tags">{props.films.genre}</div>
        <div className="preview-info__tags">{props.films.runtime}</div>
      </div>  */ }
      <Link className="button-back" to="/list"><div>Add</div></Link>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    films: getLastMovie(state.films)
  }
}

export default connect(mapStateToProps)(MoviePreview);