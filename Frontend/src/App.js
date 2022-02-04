import React, {useEffect, useState} from 'react';
import Watchlist from './component/Watchlist.js';
import Detail from './component/Detail';
import './App.css';
import {Link} from "react-router-dom"
import { connect } from 'react-redux'


const API_KEY = "api_key=d557ce4f030b477de4f503f2305d0f57";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const searchURL = BASE_URL + "/search/movie?" + API_KEY;

function NotLogin() {
  return <>
    <li>
      <Link to="/login">
        <button className='nav-link1'>Login</button>
      </Link>
    </li>
    <li>
      <Link to="/register">
        <button className='nav-link'>Sign Up</button>
      </Link>
    </li>
  </>
}

function WesLogin(props){
  return <li>
    <button className='nav-link1'>{props.username}</button>
  </li>
}

function App(props) {

  //show movies
  const [movies, setMovies] = useState ([]);
  const [favourit, setFavourit] = useState([]);

  useEffect(() => {
    fetch(API_URL).then(res => res.json()).then(data =>{
      setMovies(data.results);
    });
  }, []);

  //movie detail
  const [selectedMovie, onMovieSelect] = useState();


  //search movies
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(searchURL + "&query=" + searchTerm).then((res) => res.json()).then((data) => {
      setMovies(data.results);
    })

  }


  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    setFavourit(props.wishlist)
  }, []);

  const addFavourit = (movie) => {
    const newFavoriteList = [...favourit, movie]
      setFavourit(newFavoriteList);
      props.menggantiWishlist(newFavoriteList)
  }


  //remove fav
  const removeFavourit = (movie) => {
    const newFavoriteList = favourit.filter(
      (favour) => favour.id !== movie.id
    );
    setFavourit(newFavoriteList);
    props.menggantiWishlist(newFavoriteList)
  }


  return (
    <>
          <header className="NavBar">
            <h1><a href="index.js">Nopo</a></h1>
            <ul className="List-nav">
              <li><a href="https://www.themoviedb.org/">TMDB</a></li>
              <li>
                <form onSubmit={handleOnSubmit}>
                <input 
                  type = "search" 
                  placeholder="Search" 
                  className="search" 
                  value={searchTerm} 
                  onChange={handleOnChange}>
                </input>
                </form>
              </li>
              {
                props.username === '' ? <NotLogin/> : <WesLogin username={props.username}/>
              }
            </ul>
          </header>
          
          {selectedMovie && <Detail selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}

          <div className="main">
            <Watchlist movies ={movies} onMovieSelect={onMovieSelect} onFavouritSelect={addFavourit} />
          </div>

          <div className="Fav">
            <h1>Favourite</h1>
          </div>

          <div className="main">
            <Watchlist movies ={favourit} onMovieSelect={onMovieSelect} onFavouritSelect={removeFavourit}/>
          </div>
  </>
  );
}

const ubahJadiProps = (state) => {
  return {
      username: state.username,
      wishlist: state.wishlist
  }
}

const dispatProps = (dispatch) => {
  return {
    menggantiUsername: (nilaiBaru) => dispatch({type: 'gantiUsername', newValue: nilaiBaru}),
    menggantiWishlist: (nilaibaru) => {dispatch({type: 'gantiWishlist', newValue: nilaibaru})
    }
  }
}

export default connect(ubahJadiProps, dispatProps)(App);
