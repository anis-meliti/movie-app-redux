import store from "../js/store/index";
import { addMovie } from "./actions";
import { filterMovie } from "./actions";
import { filterMovieStar } from "./actions";
window.store = store;
window.addMovie = addMovie;
window.filterMovie = filterMovie;
window.filterMovieStar = filterMovieStar;
