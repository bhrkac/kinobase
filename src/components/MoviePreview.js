//new
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addMovie } from '../actions/filmActions';
import { showPreview } from '../actions/filterActions';
import { removeMovie } from '../actions/filmActions';
import omdbAPIKey from '../omdbAPIKey';

const omdbFetchAdd = (searchID, dispatch) => {
  if (searchID) {
    fetch('https://www.omdbapi.com/?apikey=' + omdbAPIKey + '&type=movie&i=' + searchID)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        const moviesObject = responseJson;
        if (moviesObject.Title) {
          dispatch(addMovie({
            id: moviesObject.imdbID,
            title: moviesObject.Title,
            year: moviesObject.Year,
            director: moviesObject.Director,
            writer: moviesObject.Writer,
            imdbRating: moviesObject.imdbRating,
            actors: moviesObject.Actors,
            plot: moviesObject.Plot,
            genre: moviesObject.Genre,
            poster: moviesObject.Poster,
            runtime: moviesObject.Runtime,
            country: moviesObject.Country
          }));
          dispatch(showPreview(false));
        };
      });
  };
};


const MoviePreview = (filmPreviews) => {
      console.log('MoviePreview - filmPreviews: ', filmPreviews);
  return (
    <div>
    <div className="preview">
      <div className="preview-poster"><img src={filmPreviews.Poster} alt="Poster not available"/></div>
      <div className="preview-title">{filmPreviews.Title}</div>
      <div className="preview-subtitle">{filmPreviews.Year}.</div>
      <div className="preview-buttons">
        <button onClick={(e) => {
          omdbFetchAdd(filmPreviews.imdbID, filmPreviews.dispatch);
        }} className="preview-button "><span className="fas fa-check fa-xs"></span></button>
      </div>
    </div>
   </div>
  );
};


export default connect()(MoviePreview);