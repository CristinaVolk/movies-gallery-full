import {getFavouriteMovies} from "../localStorage/setGetMovies.js";
import {FAVOURITE_MOVIES} from "../constants/localStorage.js";

export function handleEmptyMovieList(movieContainer) {
    const favouriteMovies = getFavouriteMovies();
    if (favouriteMovies.length === 0 && movieContainer.id === FAVOURITE_MOVIES) {
        movieContainer.insertAdjacentHTML('afterbegin',
            `<h3>Sorry you have not saved anything to favourites</h3>`)
    }
}
