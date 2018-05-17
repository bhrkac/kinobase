import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getMovieDetail from '../selectors/getMovieDetail';


const MovieDetail = (props) => {
  console.log('MovieDetail.js - props', props)
  return (
    <div className="detail">
      <div className="detail-title">{props.films.title}</div>
      <div className="detail-subtitle">{props.films.director}, {props.films.year}.</div>
      <div className="detail-actors">Starring: {props.films.actors}</div>
      <div className="detail-poster"><img src={props.films.poster} alt="Poster not available"/></div>
      <div className="detail-plot">"{props.films.plot}"</div>
      <div className="detail-rating">&#9733;{props.films.imdbRating}</div>      
      <div className="detail-info">
        <div className="detail-info__tags">{props.films.country}</div>
        <div className="detail-info__tags">{props.films.genre}</div>
        <div className="detail-info__tags">{props.films.runtime}</div>
      </div>
      <Link className="button-back" to="/list"><div>Back</div></Link>
    </div>
  );
};


const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  console.log('MovieDetail.js - mapState', state)
  console.log('MovieDetail.js - params', id)
  return {
    films: getMovieDetail(state.films, id)
  };
};

export default connect(mapStateToProps)(MovieDetail);

