import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFormAndValidation} from "../../hooks/useFormAndValidation";

export default function SearchForm({ handleSearch }) {
  const { pathname } = useLocation();

  const { values, handleChange, errors, isValid, setValues, setErrors } = useFormAndValidation();

  const [shortState, setShortState] = useState();

  const { searchInput } = values;

  const handleSubmit = (e) => {
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
    }
  }, []);

  return (
    <section>
      <form className="search-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="search-form__button" disabled={!isValid} />
        </div>
        <FilterCheckbox filter={shortState}
                        setFilter={setShortState} />
      </form>
    </section>
  );
}
