import {ALL_MOVIES, FAVOURITE_MOVIES} from "../constants/localStorage.js";

export function handleListsSwitching(event, newListID) {
    const movieListTitle = event.target.previousElementSibling;
    switch (newListID) {
        case FAVOURITE_MOVIES: {
            movieListTitle.innerHTML = `Favourite Movies`;
            event.target.textContent = `Click me to see All movies`;
            break;
        }
        case ALL_MOVIES: {
            movieListTitle.innerHTML = `All Movies`;
            event.target.textContent = `Click me to see Favourite movies`;
            break;
        }
        default: {
            return;
        }
    }
}
