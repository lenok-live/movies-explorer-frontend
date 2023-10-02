import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFormAndValidation} from "../../hooks/useFormAndValidation";

export default function SearchForm({ handleSearch, isMoviesLoaded }) {
  const { pathname } = useLocation();

  const { values, handleChange, errors, isValid, setValues, setErrors, setIsValid } = useFormAndValidation();

  const [shortState, setShortState] = useState();

  const { searchInput } = values;


  const handleSubmit = (e, searchInput, shortState) => {
    e.preventDefault();
    if(!searchInput) {
      setErrors({...errors, 'searchInput': 'Введите ключевое слово!'})
      return
    };

    if (pathname === '/movies') {
      localStorage.setItem('searchFilm', searchInput);
      if(shortState) {
        localStorage.setItem('shorts', String(shortState));
      } else {
        localStorage.setItem('shorts', String(false));
      }
    }

    handleSearch(searchInput, shortState);
  };

  const handleFilter = (e) => {
    const checked =  e.target.checked;

    if(isMoviesLoaded) {
      handleSubmit(e, searchInput, checked);
    }

    if(searchInput) {
      setShortState(checked)
    }

  }

  useEffect(() => {
    if (pathname === '/movies') {
      const savedInputValue = localStorage.getItem('searchFilm');
      const savedShorts = JSON.parse(localStorage.getItem('shorts'));

      if (savedInputValue) {
        setValues({...values, searchInput: savedInputValue});
      }
      if (savedShorts) {
        setShortState(savedShorts);
      }
      if (savedInputValue || savedShorts) {
        handleSearch(savedInputValue, savedShorts);
      }

      setIsValid(Boolean(savedInputValue))
    }
  }, []);

  return (
    <section>
      <form className="search-form" onSubmit={(e) => handleSubmit(e, searchInput, shortState)} noValidate>
        <div className="search-form__container-input">
          <input
            type="text"
            name="searchInput"
            className="search-form__input"
            placeholder="Фильм"
            required
            onChange={handleChange}
            value={searchInput}
          />
          <button type="submit" className="search-form__button" />
        </div>
        <p className={'auth__error'}>{errors.searchInput}</p>
        <FilterCheckbox filter={shortState}
                        setFilter={handleFilter} status={isValid} />
      </form>
    </section>
  );
}
