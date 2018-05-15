import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MovieList from './../components/MovieList';
import { Title, Menu } from '../components/Header';
import MovieDetail from './../components/MovieDetail';
import NotFound from './../components/NotFound';
import AddMovie from '../components/AddMovie';
import Stats from './../components/MovieStats';
import Account from './../components/Account';

const AppRouter = () => (
    <BrowserRouter>
      <div>
{
  /*         <Title />const Title = () => {
    return (
      <div className="title">
        <div>kinobase</div>
        <div className="subtitle">
          The place for your film collection.
        </div>
      </div>
    );
  };
        <Menu />
        <AddMovie /> */}
        <Switch>
          <Route exact path="/" component={() => (<div><Title /><Menu /><AddMovie /><MovieList /></div>)} />
          <Route path="/list" component={() => (<div><Title /><Menu /><MovieList /></div>)} />
          <Route path="/stats" component={() => (<div><Title /><Menu /><Stats /></div>)} />
          <Route path="/account" component={() => (<div><Title /><Menu /><Account /></div>)} />
          <Route exact path="/detail/:id" component={MovieDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;
