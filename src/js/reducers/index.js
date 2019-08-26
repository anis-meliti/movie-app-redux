import { ADD_MOVIE, FILTER_MOVIE, FILTER_MOVIE_STAR } from "../constants/action-types";
const initialState = {

    moviesList: [{
        "title": "V for Vandetta",
        "poster": "http://i.ebayimg.com/00/s/NTAwWDMzMw==/z/VIsAAOxyaTxTWIqs/$_3.JPG?set_id=2",
        "rating": 5
    },
    {
        "title": "The Detachement",
        "poster": "https://www.joblo.com/assets/images/oldsite/posters/images/full/detachment-french-poster.jpg",
        "rating": 4
    },
    {
        "title": "The experiment",
        "poster": "https://images-na.ssl-images-amazon.com/images/I/51UFOnvEviL.jpg",
        "rating": 5
    },
    {
        "title": "Inception",
        "poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        "rating": 4
    },
    {
        'title': 'Unthinkable',
        'poster': "https://m.media-amazon.com/images/M/MV5BMTg4MTc3OTI4Nl5BMl5BanBnXkFtZTgwNDQyNjcxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "rating": 5
    }],
    searchTerm: '',
    searchStar: 0

}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIE: return Object.assign({}, state, {
            moviesList:
                state.moviesList.concat(action.payload)
        });

        case FILTER_MOVIE: return { ...state, searchTerm: action.payload }
        case FILTER_MOVIE_STAR: return { ...state, searchStar: action.payload }
        default: return state;
    }
}
export default rootReducer;
