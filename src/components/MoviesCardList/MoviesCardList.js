// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.

import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

import test from '../../utils/test.js';

export default function MoviesCardList({ type }) {

  const [movies, setMovies] = React.useState([]);

  function testGetMovies() {
    setMovies(test);
  }

  React.useEffect(() => {
    testGetMovies();
  }, []);

  return (
    <section className="movie-card-list" aria-label="Список фильмов">
      {movies.map((movie) => {
        return (
          <MoviesCard
            key={movie.id}
            name={movie.nameRU}
            duration={movie.duration}
            thumbnail={movie.thumbnail}
            type={type}
          />
        );
      })}
    </section>
  );
}
