// Movies — компонент страницы с поиском по фильмам.
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import {useEffect, useMemo, useState} from "react";
import searchFilter from "../../utils/searchFilter";
import moviesApi from "../../utils/api/MoviesApi";
import mainApi from "../../utils/api/MainApi";
import {
  LOAD_MOVIES_COUNT_MOBILE,
  LOAD_MOVIES_COUNT_PC, LOAD_MOVIES_COUNT_TABLET, MOBILE_WIDTH, MOVIES_ON_PAGE_COUNT_MOBILE,
  MOVIES_ON_PAGE_COUNT_PC,
  MOVIES_ON_PAGE_COUNT_TABLET, TABLET_WIDTH
} from "../../constrains/metaConstrains";
import {useBrowserWidth} from "../../utils/useBrowserWidth";
import Preloader from "../Preloader/Preloader";
import test from '../../utils/test.js';

export default function Movies() {
  const width = useBrowserWidth();

  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [savedFilms, setSavedFilms] = useState([]);
  const [moviesOnPage, setMoviesOnPage] = useState(LOAD_MOVIES_COUNT_PC);
  const [visibleMovies, setVisibleMovies] = useState();
  const [defaultMoviesPerPage, setDefaultMoviesPerPage] = useState(MOVIES_ON_PAGE_COUNT_PC);

  const calculateMoviesPerPage = (movies) => {
    return movies.slice(0, moviesOnPage * currentPage + defaultMoviesPerPage - moviesOnPage)
  }

  useEffect(() => {
    if(width <= MOBILE_WIDTH) {
      setMoviesOnPage(LOAD_MOVIES_COUNT_MOBILE);
      setDefaultMoviesPerPage(MOVIES_ON_PAGE_COUNT_MOBILE)
    } else if (width <= TABLET_WIDTH) {
      setMoviesOnPage(LOAD_MOVIES_COUNT_TABLET);
      setDefaultMoviesPerPage(MOVIES_ON_PAGE_COUNT_TABLET);
    } else {
      setMoviesOnPage(LOAD_MOVIES_COUNT_PC);
      setDefaultMoviesPerPage(MOVIES_ON_PAGE_COUNT_PC);
    }

    setVisibleMovies(calculateMoviesPerPage(searchedMovies))
  }, [width, searchedMovies, currentPage, moviesOnPage])

  useEffect(() => {
    const storageMovies = localStorage.getItem('movies');

    if (!storageMovies) {
      // getPublicFilms()
      setIsLoading(false);
    }

    const fetchSavedMovies = async () => {
      setSavedFilms(test);
    }
    fetchSavedMovies()

    const name = localStorage.getItem('searchFilm');
    const shorts = JSON.parse(localStorage.getItem('shorts'));

    if(name || shorts) {
      startFilter(name, shorts);
    } else {
      setMessage('Добро пожаловать, введите название фильма чтобы начать')
      setIsLoading(false)
    }

    setSearchedMovies(test); // remove when do logic
  }, []);

  const startFilter = useMemo(() => (movieName, shortFilter) => {
    const cachedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const filtered = searchFilter(cachedMovies, movieName, shortFilter);
    setMessage(filtered.length === 0 ? 'Ничего не найдено' : '');
    setSearchedMovies(filtered);
    setCurrentPage(1);
  }, []);

  const handleSearch = async (name, shorts) => { // TODO Разобраться почему не загружаются фильмы при загрузке.
    setIsLoading(true);

    const storageMovies = localStorage.getItem('movies'); // забираем сохранённый результат

    try {
      if (!storageMovies) { // делаем проверку. Если нет уже загруженных - подгружаем.
        // const data = await moviesApi.getFilms();

        setSearchedMovies(test);
        // if (data.length > 0) {
        //   localStorage.setItem('movies', JSON.stringify(data));
        //   setSearchedMovies(data);
        // }
      }
    } catch (error) {
      setMessage('Проблема при загрузке фильмов');
    } finally {
      setIsLoading(false);
    }

    startFilter(name, shorts);
  };

  const loadMore = (e) => {
    e.preventDefault();
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <main>
        <SearchForm handleSearch={handleSearch} />
        {isLoading
          ? <Preloader />
          : <>
            <MoviesCardList setVisibleMovies={setVisibleMovies} savedFilms={savedFilms} setSavedFilms={setSavedFilms} movies={visibleMovies} error={message} />
            <More />
            {/* {((visibleMovies.length && (visibleMovies.length !== searchedMovies.length)) && <More handleLoadMore={loadMore} />) || null} */}
          </>
        }
      </main>
    </>
  );
}
