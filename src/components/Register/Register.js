import Auth from '../Auth/Auth';
import AuthInputForName from '../AuthInput/AuthInputForName';
import AuthInputForEmail from '../AuthInput/AuthInputForEmail';
import AuthInputForPassword from '../AuthInput/AuthInputForPassword';

export default function Register() {
  return (
    <Auth mode="register">
      <AuthInputForName />
      <AuthInputForEmail />
      <AuthInputForPassword />
      <p className="auth__error">Что-то пошло не так...</p>
    </Auth>
  );
}
