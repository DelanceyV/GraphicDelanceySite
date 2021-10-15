import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
// import GalleryCard from '../components/GalleryCard';
import Gallery from './gallery';
import Home from './home';
import ReachOut from './reachOut';
import CardGame from './cardGame';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Switch, Route } from 'react-router-dom';

export default function Main () {
    
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route exact path='/'> <Home /> </Route>
        <Route exact path='/gallery'> <Gallery /> </Route>
        <Route exact path='/reachOut'> <ReachOut /> </Route>
        <Route exact path='/catGame' render={() => {window.location.href="matching-game.html"}} />
        <Route exact path='/cardGame'> <CardGame /> </Route>
        {/* <Route path='/catGame' />  */}
      </Switch>
      <Footer />
    </div>
  );
}