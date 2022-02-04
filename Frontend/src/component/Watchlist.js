import React from "react";
import { Component } from "react/cjs/react.production.min";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const Watchlist = (props) => {
    return(
        <>
            {props.movies.map((movie, index) => (
                <div className="movie">
                    <img src={IMG_URL + movie.poster_path} alt={movie.title} />
                    <div className="movie-info">
                        <button className="know-more" id="{movie.id}" onClick ={() => props.onMovieSelect(movie.id)}>{movie.title}</button>
                        <span className="yellow">{movie.vote_average}</span>
                    </div>
                    <button className="add" onClick={()=>props.onFavouritSelect(movie)}>+Favourite</button>
                </div>  
            ))}      
        </>

    );

};

export default Watchlist;
