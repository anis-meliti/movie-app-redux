import { ADD_MOVIE, FILTER_MOVIE } from "../constants/action-types";


export function addMovie(payload) {

    return { type: ADD_MOVIE, payload }
};
export function filterMovie(payload) {
    return { type: FILTER_MOVIE, payload }
};
