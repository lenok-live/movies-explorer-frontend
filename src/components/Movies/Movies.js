// Movies — компонент страницы с поиском по фильмам.
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Movies() {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList type="all" />
        <More />
      </main>
      <Footer />
    </>
  );
}
