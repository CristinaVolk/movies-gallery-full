export function handleOpenMovieCardModal(event) {
    const ifClickedMovieCardImg = event.target.classList.contains('movie-card-img');
    if (!ifClickedMovieCardImg) {
        return;
    }

    const clickedMovieCardID = event.target.parentElement.dataset.movieId;
    const xModal = document.querySelector('x-modal');
    xModal.id = clickedMovieCardID;
    xModal.visible = true;
}
