import { ADD_MOVIE, FILTER_MOVIE, FILTER_MOVIE_STAR } from "../constants/action-types";


export function addMovie(payload) {

    return { type: ADD_MOVIE, payload }
};
export function filterMovie(payload) {
    return { type: FILTER_MOVIE, payload }
};
export function filterMovieStar(payload) {
    return { type: FILTER_MOVIE_STAR, payload }
};
