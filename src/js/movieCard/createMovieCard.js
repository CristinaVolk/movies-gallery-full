export function createMovieCard (movie) {
    const {id, releaseYear, description, movieName, imageUrl, isFavourite} = movie;
    const heartIcon = isFavourite ? 'favourite.svg' : 'not-favourite.svg';

    return `
        <div class="movie-card" data-movie-id="${id}">
            <img class="movie-card-img" src="${imageUrl}" alt="${movieName}"/>
            <h3>${movieName}</h3>
            <p>${description}</p>
            <strong>${releaseYear}</strong>
            <button class="movie-card-btn-icon">
                <img src="assets/icons/${heartIcon}" alt="heart-icon"/>
            </button>
        </div>
        `;
}
