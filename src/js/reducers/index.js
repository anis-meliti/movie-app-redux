import { ADD_TODO, REMOVE_TODO } from "../constants/action-types";
import _ from 'lodash'
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
    }
    ]
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: return Object.assign({}, state, {
            todos:
                state.todos.concat(action.payload)
        });
        case REMOVE_TODO: let newState = _.cloneDeep(state);
            let index = _.findIndex(newState.todos, { ID: action.payload });
            newState.todos.splice(index, 1);
            return newState;





        default: return state;
    }
}
export default rootReducer;
