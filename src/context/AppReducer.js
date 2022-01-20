export default(state, action) => {
    switch(action.type){
        case "ADD_MOVIE_TO_WATCH_LATER":
            return{
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }
        default:
            return state;
    }
};