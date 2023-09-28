import Auth from '../Auth/Auth';
import AuthInputForEmail from '../AuthInput/AuthInputForEmail';
import AuthInputForPassword from '../AuthInput/AuthInputForPassword';
import "./Login.css";


export default function Login () {
  return (
    <Auth mode="login">
      <AuthInputForEmail />
      <AuthInputForPassword />
      <div className="auth__space" />
    </Auth>
  );
}
