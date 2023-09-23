import Auth from '../Auth/Auth';
import AuthInput from '../AuthInput/AuthInput';

export default function Login () {

  function AuthInputForEmail() {
    return (
      <AuthInput
        label="E-mail"
        params={{
          type: 'email',
          name: 'email',
          required: true,
          placeholder: 'Введите email'
        }}
      />
    );
  }

  function AuthInputForPassword() {
    return (
      <AuthInput
        label="Пароль"
        params={{
          type: 'password',
          name: 'password',
          required: true,
          placeholder: 'Введите пароль',
        }}
      />
    );
  }

  return (
    <Auth mode="login">
      <AuthInputForEmail />
      <AuthInputForPassword />
    </Auth>
  );
}
