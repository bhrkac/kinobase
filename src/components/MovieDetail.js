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
      <h2>{props.films.director}, {props.films.year}.</h2>
      <h3>Starring: {props.films.actors}</h3>
      <div className="detail-poster"><img src={props.films.poster} /></div>
      <div className="detail-plot">"{props.films.plot}"</div>
      <div className="detail-info">
        <div className="detail-info__tags">{props.films.country}</div>
        <div className="detail-info__tags">{props.films.genre}</div>
        <div className="detail-info__tags">{props.films.runtime}</div>
      </div>
      <div className="detail-plot">"{props.films.imdbRating}"</div>      
      <Link className="button-back" to="/"><div>Back</div></Link>
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

