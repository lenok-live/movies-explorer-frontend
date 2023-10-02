// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.

import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({ setVisibleMovies, savedFilms, setSavedFilms, movies, error }) {
  return (
    <section className="movie-card" aria-label="Список фильмов">



        {movies.length ?
          (<ul className="movie-card__list"> {movies.map((movie) => (
            <MoviesCard
                        key={movie.id || movie._id}
                        setVisibleMovies={setVisibleMovies}
                        setSavedFilms={setSavedFilms}
                        savedFilms={savedFilms}
                        movie={movie} />
          ))}</ul>) :  <div className={'center'}><h1>{error}</h1></div>}
    </section>
  );
}
