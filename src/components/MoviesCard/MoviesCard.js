// MoviesCard — компонент одной карточки фильма.
import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ name, duration, thumbnail }) {
  const [isSaved, setIsSaved] = React.useState(false);

  const ref = React.useRef();

  const { pathname } = useLocation();

  function handleToggleButton() {
    setIsSaved(!isSaved);
  }

  function countTime(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60;

    if (hours && minutes) return `${hours}ч ${minutes}м`;

    return hours ? `${hours}ч` : `${minutes}м`;
  }

  return (
    <article className='movie-card' ref={ref}>
      <img
        src={thumbnail}
        alt={`Кадр из фильма ${name}`}
        className='movie-card__thumbnail'
      />
      <div className='movie-card__wrapper'>
        <h2 className='movie-card__name'>{name}</h2>
        <span className='movie-card__duration'>{countTime(duration)}</span>
      </div>


      {pathname === '/saved-movies' ? (
        <button
          className='movies-card__button movies-card__button_type_delete'
          type='button'
        />
      ) : !isSaved ? (
        <button
          className='movies-card__button'
          type='button'
          onClick={handleToggleButton}
        ></button>
      ) : (
        <button
          className='movies-card__button movies-card__button_type_saved'
          type='button'
          onClick={handleToggleButton}
        />
      )}
    </article>
  );
}
