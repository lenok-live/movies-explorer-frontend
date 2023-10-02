// SavedMovies — компонент страницы с сохранёнными карточками фильмов.
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useEffect, useMemo, useState} from "react";
import mainApi from "../../utils/api/MainApi";
import searchFilter from "../../utils/searchFilter";
import Preloader from "../Preloader/Preloader";
import test from '../../utils/test';

export default function SavedMovies() {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [error, setError] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    if(!filteredMovies.length) {
      setError('Ничего не найдено')
    }
  }, [filteredMovies])

  useEffect(() => {
    const fetchSavedFilms = async () => {
      try {
        const token = localStorage.getItem('jwt')
        const data = await mainApi.getSavedFilms(token);
        if (data.length > 0) {
          setFilteredMovies(data);
          setSavedMovies(data);
        } else {
          setError('Ничего не найдено');
        }
      } catch (err) {
        setError('Ошибка при загрузке фильмов');
        console.error(err);
      }
    // setFilteredMovies(test);
    // setSavedMovies(test);
    }

    fetchSavedFilms().finally(() => {
      setIsLoading(false);
    });
  }, [])


  const filter = useMemo(() => (name, shorts) => {
    const filtered = searchFilter(savedMovies, name, shorts);
    setError(filtered.length === 0 ? 'Ничего не найдено' : '');
    setFilteredMovies(filtered);
    setIsLoading(false);
  }, [savedMovies]);

  const handleSearch = (name, shorts) => {
    setIsLoading(true);
    filter(name, shorts);
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 1000)

  return (
    <>
      <main>
        <SearchForm handleSearch={handleSearch}  />
        {isLoading ? <Preloader/> : <MoviesCardList setVisibleMovies={setFilteredMovies} savedFilms={savedMovies} setSavedFilms={setSavedMovies} movies={filteredMovies} error={error} />}
        <div className='saved-movies-empty-space' />
      </main>
    </>
  );
}
