// SavedMovies — компонент страницы с сохранёнными карточками фильмов.
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function SavedMovies() {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList type="saved" />
        <div className='saved-movies-empty-space' />
      </main>
      <Footer />
    </>
  );
}
