import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getMovieDetail from '../selectors/getMovieDetail';


// componentDidMount() {
//  getMovieDetail();    
// };



const MoviePage = (props) => {
  console.log('MovieDetail.js - props', props.films[0].title)
  return (
    <div className="detail">
      <div className="detail-title">{props.films.title}</div>
      <h2>{props.director}, {props.year}.</h2>
      <h3>Starring: {props.actors}</h3>
      <div className="detail-poster"><img src={props.poster} /></div>
      <div className="detail-plot">"{props.plot}"</div>
      <div className="detail-info">
        <div className="detail-info__tags">{props.country}</div>
        <div className="detail-info__tags">{props.genre}</div>
        <div className="detail-info__tags">{props.runtime}</div>
      </div>
      <Link className="button-back" to="/"><div>Back</div></Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('MovieDetail.js - mapState', state)
  return {
    films: getMovieDetail(state.films, state.filters)
  };
};

export default connect(mapStateToProps)(MoviePage);

