import { useState, useCallback } from 'react';

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target

    setValues({ ...values, [name]: value });
    if(name === 'email') {
      const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
      const isValid = pattern.test(value);
      setErrors({ ...errors, [name]: !isValid ?  'Неверный формат Email' : '' });
      setIsValid(isValid)
    } else {
      setErrors({ ...errors, [name]: e.target.validationMessage || '' });
      setIsValid(e.target.closest('form').checkValidity());
    }
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid, setErrors };
}
