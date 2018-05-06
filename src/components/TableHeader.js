import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { sortByTitle, sortByYear, sortByDirector, sortByRating } from '../actions/filterActions';

const TableHeader = (props) => {
  return (
    <div className="database__header">
      <table>
        <thead>
          <tr>
            <th className="database__title">
              <button className="sort-button" onClick={() => { props.dispatch(sortByTitle()); }
              }
              >TITLE</button></th>
            <th className="database__year">
              <button className="sort-button" onClick={() => { props.dispatch(sortByYear()); }
              }
              >YEAR</button></th>
            <th className="database__director">
              <button className="sort-button" onClick={() => { props.dispatch(sortByDirector()); }
              }
              >DIRECTOR</button></th>
            <th className="database__director">
              <button className="sort-button" onClick={() => { props.dispatch(sortByRating()); }
              }
              >RATING</button></th>
          </tr>
        </thead>
      </table>
    </div>
  )
}


export default connect()(TableHeader);