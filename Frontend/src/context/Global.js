import react, {createContext, useReducer, useEffect} from "react";
import AppReducer from './AppReducer.js';

//initial state
const initialState = {
    /*watchlist: localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],*/
    watchlist: [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = props => {
    const [state, dispatch]= useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    }, [state]);
    //action
    const addMovietoWatchlater = movie => {
        dispatch({type: "ADD_MOVIE_TO_WATCH_LATER", payload: movie});
    };

    return(
        <GlobalContext.Provider value={{watchlist: state.watchlist, watched: state.watched, addMovietoWatchlater,}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
