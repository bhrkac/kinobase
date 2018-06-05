//new
import React from 'react';
import { connect } from 'react-redux';
import omdbAPIKey from '../omdbAPIKey';
import { addMoviePreviews } from '../actions/filmActions';
import { showPreview } from '../actions/filterActions';

class AddMoviePreviews extends React.Component {
  constructor(props) {
    super(props)
    this.getTitle = this.getTitle.bind(this);
  };

  omdbFetchSearch(searchTitle) {
    if (searchTitle) {
      fetch('https://www.omdbapi.com/?apikey=' + omdbAPIKey + '&type=movie&s=' + searchTitle)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          const moviesObject = responseJson;
          this.props.dispatch(addMoviePreviews(moviesObject.Search));
          this.props.dispatch(showPreview(true));
          console.log('AddMoviePreviews', moviesObject.Search)
      });
    };
  };

  getTitle(e) {
    e.preventDefault();
    const searchTitle = e.target.elements.searchQuery.value;
    this.omdbFetchSearch(searchTitle);
    e.target.elements.searchQuery.value = '';
  };

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.getTitle} >
          <div className="input-wrapper">
            <input className="input-text" type='text' name='searchQuery'/>
          </div>
          <button className="button-search"><span className="fas fa-search fa-sm"></span></button>
        </form>
      </div>
    )
  };
};

export default connect()(AddMoviePreviews);


