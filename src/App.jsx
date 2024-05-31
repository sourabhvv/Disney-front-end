import { useState } from 'react';
import { BrowserRouter, Route, Switch, Link, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Componets/Header';
import Slider from './Componets/Slider';
import ProductionHouse from './Componets/ProductionHouse';
import GenreMovieList from './Componets/GenreMovieList';
import MoviesList from './Componets/MoviesList';
import Disney from './Componets/Disney';
import Marvel from './Componets/Marvel';
import MoviesDetail from './Componets/MoviesDetail';
import MovieInfo from './Componets/MovieInfo';
import Explore from './Componets/Explore';
function Headers() {
  const location = useLocation();

  if (location.pathname !== '/movies-Details/:id') {
    return <ProductionHouse />;
  }

  return <h1>header</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
       
       

        <Switch>
          <Route path='/' exact component={GenreMovieList} />
          <Route path='/movies/disney' component={Disney} />
          <Route path='/movies/marvel' component={Marvel} />
          <Route path='/movies-Details/:id' component={MoviesDetail} />
          <Route  path='/explore' exact component={Explore}/>
          <Route  path='/MovieInfo' exact component={MovieInfo}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
