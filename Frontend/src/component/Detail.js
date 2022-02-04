import react from "react";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";

/*//Raka Ryandra Guntara Sangat Ganteng*/
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const Detail = (props, movieFav) => {
    const [movieInfo, setMovieInfo] = useState();
    const {selectedMovie} = props;

    useEffect(()=> {
        axios
            .get(`https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=d557ce4f030b477de4f503f2305d0f57`)
            .then((res)=>setMovieInfo(res.data));
    }, [selectedMovie]);


    return(
        <div className ="container">
            <div className="image">
                <img src = {IMG_URL + movieInfo?.poster_path}></img> 
            </div>

            <div className="movie-detail">
                <h1>{movieInfo?.title}</h1>
                <span className="yellow">Rating : {movieInfo?.vote_average}</span>
                <p className="overview">{movieInfo?.overview}</p>         
            </div>
            <close onClick={() => props.onMovieSelect()}>X</close>

        </div>
    )
}

/*//Raka Ryandra Guntara Sangat Ganteng*/
export default Detail;