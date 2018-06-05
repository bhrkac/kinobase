import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeMovie } from '../actions/filmActions';

const Movie = ({ id, dispatch, title, year, director, imdbRating }) => {
  return (
    <div className="database">
      <Link to={'/detail/' + id}>
        <table>
          <tbody>
            <tr>
              <td className="database__title">{title}</td>
              <td className="database__info database__year">{year}.</td>
              <td className="database__info database__director">{director}</td>
              <td className="database__info database__year">{imdbRating}</td>
            </tr>
          </tbody>
        </table>
      </Link>
      <button onClick={(e) => {
        console.log(id);
        dispatch(removeMovie({ id }));
       }} className="button__remove">&times;
      </button>
    </div>
  )
};

export default connect()(Movie);