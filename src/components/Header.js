import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Title = () => {
  return (
    <div className="title">
      <div>kinobase</div>
      <div className="subtitle">
        The place for your film collection.
      </div>
    </div>
  );
};

const Menu = ( props ) => {
  return (
    <div className="menu">
      <NavLink to='/' exact className="menu-item" activeClassName="menu-item__active">Search</NavLink>
      <NavLink to='/list/' className="menu-item" activeClassName="menu-item__active">List &nbsp; 
        <span className="counter">{props.filmsCount}</span>
      </NavLink>
      <NavLink to='/stats/' className="menu-item" activeClassName="menu-item__active">Stats</NavLink>
      <NavLink to='/account/' className="menu-item" activeClassName="menu-item__active">Account</NavLink>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    filmsCount: state.films.length,
  }
}


export { Title };

export default connect(mapStateToProps)(Menu);