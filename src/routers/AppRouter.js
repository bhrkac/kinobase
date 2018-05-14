import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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
          <Route path="/list" component={() => (<div><Title /><Menu /><MovieList /></div>)} />
          <Route path="/want" component={() => (<div><Title /><Menu /></div>)} />
          <Route path="/stats" component={() => (<div><Title /><Menu /></div>)} />
          <Route exact path="/detail/:id" component={MovieDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;
