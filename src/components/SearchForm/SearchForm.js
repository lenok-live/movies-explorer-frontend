import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm() {
  return (
    <form className='search-form'>
      <div className='search-form__container-input'>
        <input
          type='text'
          className='search-form__input'
          placeholder='Фильм'
          required
        />
        <button type='submit' className='search-form__button' />
      </div>
      <FilterCheckbox />
    </form>
  );
}
