import Auth from '../Auth/Auth';
import AuthInputForName from '../AuthInput/AuthInputForName';
import AuthInputForEmail from '../AuthInput/AuthInputForEmail';
import AuthInputForPassword from '../AuthInput/AuthInputForPassword';
import mainApi from "../../utils/api/MainApi";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../context/user";
import {useFormAndValidation} from "../../hooks/useFormAndValidation";

export default function Register() {
  const {login} = useContext(UserContext);
  const { values, handleChange, errors, setIsValid, isValid } = useFormAndValidation();

  const { email, password, name } = values;

  const navigate = useNavigate();

  useEffect(() => {
    if (!email && !password && !name) {
      setIsValid(false);
    }
  }, [email, password, name, setIsValid])

  const handleSubmit = (e) => {
    e.preventDefault();

    mainApi.registration(name, email, password)
      .then((res) => {
        if(res) {
          alert('Вы успешно зарегистрированы')
          login(email, password);
          navigate('/movies')
          return true;
        }
      })
      .catch(err => {
        if(err.status === 409) {
          alert('Пользователь с таким Email уже зарегистрирован')
        } else {
          alert('Произошла ошибка при регистрации.')
        }
        console.log(err);
      });
  }

  return (
    <Auth mode="register" onClick={handleSubmit} isValid={isValid}>
      <label className="auth__label">Имя</label>
      <input onChange={handleChange} minLength='2' maxLength='30' name='name' required id="name" value={name} className="auth__input" placeholder="Введите ваше имя" />
      <span className={'auth__error'}>
        {errors.name}
      </span>

      <label htmlFor="email" className="auth__label">Email</label>
      <input onChange={handleChange} type="email" name='email' required id="email" pattern='^.+@.+\..+$' value={email} className="auth__input" placeholder="Введите ваш email" />
      <span className={'auth__error'}>
        {errors.email}
      </span>

      <label htmlFor="password" className="auth__label">Пароль</label>
      <input onChange={handleChange} minLength='5' maxLength='12' name='password' required type="password" id="password" value={password} className="auth__input" placeholder="Введите пароль"  />
      <span className={'auth__error'}>
        {errors.password}
      </span>
    </Auth>
  );
}
