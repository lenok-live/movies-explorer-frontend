import Auth from '../Auth/Auth';
import "./Login.css";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../../context/user";
import {useFormAndValidation} from "../../hooks/useFormAndValidation";


export default function Login () {
  const navigate = useNavigate();

  const { values, handleChange, errors, setIsValid, isValid } = useFormAndValidation();

  const { email, password } = values;

  const { login } = useContext(UserContext);

  useEffect(() => {
    if (!email && !password) {
      setIsValid(false)
    }
  }, [email, password, setIsValid])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isLoggedIn = await login(email, password);

    if(isLoggedIn) {
      navigate('/movies');
    }
  }

  return (
    <Auth mode="login" onClick={handleSubmit} isValid={isValid}>
      <label className="auth__input-container">
        <span className="auth__label">Email</span>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          required
          id="email"
          pattern="^.+@.+\..+$"
          value={email}
          className="auth__input auth__input--email"
          placeholder="Введите e-mail"
        />
        <span className="auth__error auth__error--email">{errors.email}</span>
      </label>

      <label htmlFor="password" className="auth__input-container">
        <span className="auth__label">Пароль</span>
        <input
          onChange={handleChange}
          minLength="5"
          maxLength="12"
          name="password"
          required
          type="password"
          id="password"
          value={password}
          className="auth__input auth__input--password"
          placeholder="Введите пароль"
        />
        <span className="auth__error auth__error--password">{errors.password}</span>
      </label>
      <div className="auth__space" />
    </Auth>
  );
}
