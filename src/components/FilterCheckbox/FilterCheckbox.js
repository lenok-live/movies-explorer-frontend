import './FilterCheckbox.css';
import {useEffect, useState} from "react";

export default function FilterCheckbox({filter, setFilter, status}) {
  // const [valid, setValid] = useState();
  // useEffect(() => {
  //   if(status !== '') {
  //     setValid(true)
  //   } else {
  //     setValid(false)
  //   }
  // }, [])

  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__label' htmlFor='checkbox'>
        <input className='filter-checkbox__input' type='checkbox' id='checkbox' disabled={!status} checked={filter} onChange={(e) => setFilter(e)} />
        <span className='filter-checkbox__signature'>Короткометражки</span>
      </label>
    </div>
  );
}
