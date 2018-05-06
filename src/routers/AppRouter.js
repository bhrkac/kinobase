import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Movieflix from './../components/Movieflix';
import MovieList from './../components/MovieList';
import { Title, Menu } from '../components/Header';
import MovieDetail from './../components/MovieDetail';
import NotFound from './../components/NotFound';
import AddMovie from '../components/AddMovie';

const AppRouter = () => (
    <BrowserRouter>
      <div>
{/*         <Title />
        <Menu />
        <AddMovie /> */}
        <Switch>
          <Route exact path="/" component={() => (<div><Title /><Menu /><AddMovie /><MovieList /></div>)} />
          <Route path="/detail/:id" component={MovieDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;
