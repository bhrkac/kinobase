import React from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions/filmActions';
import { showLastMovie } from '../actions/filterActions';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)
    this.getTitle = this.getTitle.bind(this);
  };

  omdbFetch(searchTitle) {
    if (searchTitle) {
      fetch('https://www.omdbapi.com/?apikey=be49403a&t=' + searchTitle)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          const moviesObject = responseJson;
          if (moviesObject.Title) {
            this.props.dispatch(addMovie({
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
            }
            ))
            this.props.dispatch(showLastMovie(true));
          };
      });
    };
  };

  getTitle(e) {
    e.preventDefault();
    const searchTitle = e.target.elements.searchQuery.value;
    this.omdbFetch(searchTitle);
    e.target.elements.searchQuery.value = '';
  };

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.getTitle} >
          <div className="input-wrapper">
            <input className="input-text" type='text' name='searchQuery'/>
          </div>
          <button className="button-search">&#9906;</button>
        </form>
      </div>
    )
  };
};

export default connect()(AddMovie);


