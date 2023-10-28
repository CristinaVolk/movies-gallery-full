import {ALL_MOVIES, FAVOURITE_MOVIES} from "../constants/localStorage.js";

export function getNewMovieListID(event) {
    const oldMovieListID = event.target.nextElementSibling.id;

    let newListID;

    switch (oldMovieListID) {
        case FAVOURITE_MOVIES: {
            newListID = ALL_MOVIES;
            break;
        }
        case ALL_MOVIES: {
            newListID = FAVOURITE_MOVIES;
            break;
        }
        default: {
            return;
        }
    };

    return newListID;
}
