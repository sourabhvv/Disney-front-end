import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
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
import Login from './Auth/Login';
import Playlist from './Componets/Playlist';
import SignUp from './Auth/Signup';
import Publicplaylist from './Componets/Publicplaylist';
function Headers() {
  const location = useLocation();

  if (location.pathname !== '/movies-Details/:id') {
    return <ProductionHouse />;
  }

  return <h1>header</h1>;
}

function App() {
  

  const userRoute = () => {
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
          <Route  path='/Playlist' exact component={Playlist}/>
          <Route path='/public-play-list' exact component={Publicplaylist} />
        </Switch>
      </div>
    </BrowserRouter>

    );
}
  const authRoute = () => {
    return (
        <>
           <BrowserRouter>
      <div className="">
      
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/signup' exact component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
        </>
    );
}

const token = localStorage.getItem('token');

  return ( 
    <>
    {!!token ?userRoute() : authRoute()}
    </>
  );
}

export default App;
