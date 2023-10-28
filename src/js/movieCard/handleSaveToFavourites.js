import {getAllMovies, setAllMovies} from "../localStorage/setGetMovies.js";
import {ALL_MOVIES, FAVOURITE_MOVIES} from "../constants/localStorage.js";

export function handleSaveToFavourites(event, movieListID) {
    const clickedBtnHeartIcon = event.target.closest('.movie-card-btn-icon');
    if (!clickedBtnHeartIcon) {
        return;
    }

    const clickedMovieCard = clickedBtnHeartIcon.closest('.movie-card');
    const clickedMovieCardID = clickedMovieCard.dataset.movieId;

    const allMovies = getAllMovies();
    if (!allMovies.length) {
        return;
    }

    const updatedMovies = allMovies.map(movie => {
        if (movie.id === Number(clickedMovieCardID)) {
            return {
                ...movie,
                isFavourite: !movie.isFavourite
                }
            } else {
                return {
                    ...movie
                }
        }
    });

    setAllMovies(updatedMovies);

    switch (movieListID) {
        case FAVOURITE_MOVIES: {
            clickedMovieCard.remove();

           break;
        }
        case ALL_MOVIES: {
            const movie = updatedMovies.find(movie => movie.id === Number(clickedMovieCardID));
            if (!movie) {
                return;
            }
            const {isFavourite} = movie;
            const heartIcon = isFavourite ? 'favourite.svg' : 'not-favourite.svg';
            clickedBtnHeartIcon.insertAdjacentHTML(
                'beforeend',
                `<img src="assets/icons/${heartIcon}"/>`);

            clickedBtnHeartIcon.children[0].remove();

            break;
        }
    }

}
