// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.

import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';


export default function MoviesCardList({ setVisibleMovies, savedFilms, setSavedFilms, movies, error }) {

  return (
    <section className="movie-card__list" aria-label="Список фильмов">

        {movies.length ? movies.map((movie) => (
            <MoviesCard setVisibleMovies={setVisibleMovies}
                        setSavedFilms={setSavedFilms}
                        savedFilms={savedFilms}
                        key={movie.id || movie._id}
                        movie={movie} />
        )) :  <div className={'center'}><h1>{error}</h1></div>}
    </section>
  );
}
