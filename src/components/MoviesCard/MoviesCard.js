// MoviesCard — компонент одной карточки фильма.
import './MoviesCard.css';
import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import mainApi from "../../utils/api/MainApi";

export default function MoviesCard({ setVisibleMovies, movie, savedFilms, setSavedFilms }) {
  const [likedCard, setLikedCard] = useState(null);
  const [like, setLike] = useState(false);
  const likedCardData = savedFilms.find(savedFilm => savedFilm.movieId === movie.id);

  const location = useLocation();
  function unixToHoursSeconds(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000 * 60);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    return { hours, minutes };
  }

  useEffect(() => {
    if (savedFilms.length) {
      if(likedCardData) {
        setLikedCard(likedCardData);
      }
    }
  }, [savedFilms]);

  useEffect(() => {
    if(likedCard) {
      setLike(!!likedCard)
    }

  }, [likedCard])

  useEffect(() => {
  }, [like])

  const handleLikeClick = async () => {
    const token = localStorage.getItem('jwt');
    const newCard = {
      country: movie.country,
      description: movie.description,
      director: movie.director,
      duration: movie.duration,
      image: movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.image,
      movieId: movie.id,
      nameEN: movie.nameEN,
      nameRU: movie.nameRU,
      thumbnail: "https://www.yandex.com",
      trailerLink: movie.trailerLink,
      year: movie.year
    }

    try {
      if (like) {
        await mainApi.removeFilm(likedCard._id, token).then(() => {
          setSavedFilms(prevFilms => prevFilms.filter(savedFilm => savedFilm._id !== likedCard._id));
          setLikedCard(null);
          setLike(false);
        }).catch(err => {
          alert('Не получилось снять лайк. Попробуйте перезагрузить страничку');
        });
      } else {
        await mainApi.createFilm(newCard, token).then((res) => {
          setLikedCard(res);
          setLike(true);
        }).catch(() => {
          alert('Не получилось поставить лайк. Попробуйте перезагрузить страничку');
        });
      }
    } catch (error) {
      console.error('Error handling like:', error);
    }
  };

  const handleRemoveLike = async () => {
    const token = localStorage.getItem('jwt')
    await mainApi.removeFilm(movie._id, token).then(() => {
        setSavedFilms(prevFilms => prevFilms.filter(savedFilm => savedFilm._id !== movie._id));
        setLikedCard(null);
        setLike(false);
        setVisibleMovies(prevFilms => prevFilms.filter(savedFilm => savedFilm._id !== movie._id));
      }
    )
  }

  const { hours, minutes } = unixToHoursSeconds(movie.duration);


  return (
    <article className='movie-card'>
      <img
        src={movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.image}
        alt={`Кадр из фильма ${movie.nameRU}`}
        className='movie-card__thumbnail'
      />
      <div className='movie-card__wrapper'>
        <h2 className='movie-card__name'>{movie.nameRU}</h2>
        <span className='movie-card__duration'>{hours}h:{minutes}m</span>
      </div>


      {location.pathname  === '/saved-movies' ? (
        <button
          className='movie-card__button movie-card__button_type_delete'
          type='button'
          onClick={handleRemoveLike}
        />
      ) : !like ? (
        <button
          className='movie-card__button'
          type='button'
          onClick={handleLikeClick}
        ></button>
      ) : (
        <button
          className='movie-card__button movie-card__button_type_saved'
          type='button'
          onClick={handleLikeClick}
        />
      )}
    </article>
  );
}
