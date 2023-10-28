import {getAllMovies, getFavouriteMovies, setAllMovies} from "./localStorage/setGetMovies.js";
import {ALL_MOVIES, FAVOURITE_MOVIES} from "./constants/localStorage.js";
import {createMovieCard} from "./movieCard/createMovieCard.js";
import {getNewMovieListID} from "./moviesList/getNewMovieListID.js";
import {handleListsSwitching} from "./moviesList/handleListsSwitching.js";
import {handleSaveToFavourites} from "./movieCard/handleSaveToFavourites.js";
import {handleOpenMovieCardModal} from "./movieCard/handleOpenMovieCardModal.js";
import {ModalMovieCard} from "./modal/ModalMovieCard/ModalMovieCard.js";
import {handleEmptyMovieList} from "./moviesList/handleEmptyMovieList.js";


const btnMoviesListsSwitcher = document.querySelector('.movies-container-switch-list');
btnMoviesListsSwitcher.addEventListener('click', (event) => {
    // get new list ID
    const newMovieListID = getNewMovieListID(event);
    // handle ListsSwitching
    handleListsSwitching(event, newMovieListID);
    const movieContainer = createMovieContainer(newMovieListID);
    attachContainer(movieContainer, event.target);
})

setAllMovies();
const movieContainer = createMovieContainer();
attachContainer(movieContainer, btnMoviesListsSwitcher);
window.customElements.define('x-modal', ModalMovieCard);

// create movie container
function createMovieContainer(movieListID = FAVOURITE_MOVIES) {
    const movieContainer = document.createElement('div');
    movieContainer.id = movieListID;
    movieContainer.className = 'movies-container-list';
    let moviesList;

    switch (movieListID) {
        case FAVOURITE_MOVIES: {
            moviesList = getFavouriteMovies();
            break;
        }
        case ALL_MOVIES: {
            moviesList = getAllMovies();
            break;
        }
        default: {
            return;
        }
    };

    handleEmptyMovieList(movieContainer);

    moviesList.forEach(movie => {
        const movieCard = createMovieCard(movie);
        // attach movie card to the container
        movieContainer.insertAdjacentHTML(
            'afterbegin',
            movieCard
        );
    });

    movieContainer.addEventListener('click', (event)=> {
        handleSaveToFavourites(event, movieListID);
        handleEmptyMovieList(movieContainer);
    });

    movieContainer.addEventListener('click', (event)=> {
        handleOpenMovieCardModal(event);
    })

    return movieContainer;
}

// attach movie container to target element
function attachContainer(container, targetElement) {
    const oldMovieContainer = document.querySelector('.movies-container-list');
    if (oldMovieContainer) {
        oldMovieContainer.remove();
    }
    targetElement.insertAdjacentElement('afterend', container);
}

