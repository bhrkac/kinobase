import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import TableHeader from './TableHeader';
import Movie from './Movie';


export class Movieflix extends React.Component {
  constructor (props) {
    super(props);
    this.sorted = 'desc';
    this.omdbFunction = this.omdbFunction.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.propComparator = this.propComparator.bind(this);
    this.sortMovies = this.sortMovies.bind(this);
    this.state = {
      movies: [
        {
        title: 'Charley Varrick',
        year: '1973',
        director: 'Don Siegel',
        imdbRating: 7.5
       },
       {
        title: 'Vertigo',
        year: '1954',
        director: 'Alfred Hitchcock',
        imdbRating: 8.4
       },
       {
        title: 'Band of Outsiders',
        year: '1964',
        director: 'Jean-Luc Godard',
        imdbRating: 7.8
       },
       {
        title: 'Attack of the 50 Foot Woman',
        year: '1958',
        director: 'Nathan Juran',
        imdbRating: 5.1
       }
      ]
    };
    console.log('this.state.movies 1: ', this.state.movies)
  };




  propComparator = (propName) =>
    (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1

  sortMovies(criteria) {

    if (this.sorted == "desc") {
      this.setState((prevState) => ({
        movies: prevState.movies.sort((this.propComparator(criteria))
      )
      }));
      this.sorted = "asc";
    }
    else {
      this.setState((prevState) => ({
          movies: prevState.movies.reverse((this.propComparator(criteria))
      )
      }));
      this.sorted = "desc";
    };
  };




  render () {
    return (
      <div className="container">
        { /* <Menu />*/ }
        <Title />
        <Menu />
        {/* <Navibar />*/}
        <SearchBar omdbFunction={this.omdbFunction} movies={this.state.movies} />
        <TableHeader sortMovies={this.sortMovies} />
{/*         {this.state.movies.map((movie, index) => (
          <Movie count={index+1} key={movie.title} title={movie.title} year={movie.year} 
          director={movie.director} imdbRating={movie.imdbRating} deleteMovie={this.deleteMovie}
          />
        ))} */}

{/*         {state.movies.map((movie) => (
          <Movie key={title} title={title} year={year}
            director={director} imdbRating={imdbRating}
          />
        ))} */}

        <Movie />
      </div>
    );
  };
  
};



class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.getTitle = this.getTitle.bind(this);
  //  this.myFunction = this.props.myFunction.bind(this);
  }

  getTitle (e) {
      e.preventDefault();

      const searchTitle = e.target.elements.searchQuery.value;
      this.props.omdbFunction(searchTitle);
      e.target.elements.searchQuery.value = '';

  };

  render () {
    return (
      <div className='form'>
        <form onSubmit={this.getTitle} >
          <div className="input-wrapper">
            <input className="input-text" type='text' name='searchQuery' autoFocus />
          </div>
          <button className="button-add">+</button>
        </form>
        {
          console.log('this.props.movies: ', this.props.movies)
        }
      </div>
    )
  };
};

export default Movieflix;