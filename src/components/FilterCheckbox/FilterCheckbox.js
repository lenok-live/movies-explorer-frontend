import './FilterCheckbox.css';

export default function FilterCheckbox({filter, setFilter}) {
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__label' htmlFor='checkbox'>
        <input className='filter-checkbox__input' type='checkbox' id='checkbox' checked={filter} onChange={(e) => setFilter(e.target.checked)} />
        <span className='filter-checkbox__signature'>Короткометражки</span>
      </label>
    </div>
  );
}
