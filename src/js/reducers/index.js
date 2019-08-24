import { ADD_TODO, REMOVE_TODO } from "../constants/action-types";
import _ from 'lodash'
const initialState = {
    todos: [{

        ID: 0,
        CONTENT: "Buy Tabac!!!!!",
        CATEGORIE_ID: 1
    }, {

        ID: 1,
        CONTENT: "Study more and more!!!!!",

    }],

    owner: {
        name: 'Anis',
        pic: require('../../assets/IMG_7024.png')
    },
    categories: [{
        id: 1,
        title: 'Personnal'
    }, {
        id: 2,
        title: 'Work'
    },
    {
        id: 3,
        title: 'General'
    }],
    filterCat: 0
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
