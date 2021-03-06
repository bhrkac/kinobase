import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MovieList from './../components/MovieList';
import { Title  } from '../components/Header';
import Menu from '../components/Header';
import MovieDetail from './../components/MovieDetail';
import NotFound from './../components/NotFound';
import Stats from './../components/MovieStats';
import Account from './../components/Account';
import AddMoviePreviews from './../components/AddMoviePreviews';
import MoviePreview from './../components/MoviePreview';
import MoviePreviewList from './../components/MoviePreviewList';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={() => (<div><Title /><Menu /><AddMoviePreviews /><MoviePreviewList /></div>)} />
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
