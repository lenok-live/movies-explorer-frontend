import Auth from '../Auth/Auth';
import AuthInputForEmail from '../AuthInput/AuthInputForEmail';
import AuthInputForPassword from '../AuthInput/AuthInputForPassword';

export default function Login () {
  return (
    <Auth mode="login">
      <AuthInputForEmail />
      <AuthInputForPassword />
    </Auth>
  );
}
