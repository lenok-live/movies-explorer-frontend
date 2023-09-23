import Auth from '../Auth/Auth';
import AuthInput from '../AuthInput/AuthInput';

export default function Register() {

  function AuthInputForName() {
    return (
      <AuthInput
        label="Имя"
        params={{
          type: 'text',
          name: 'name',
          required: true,
          minLength: 2,
          maxLength: 30,
          placeholder: 'Введите имя',
        }}
      />
    );
  }

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
          placeholder: 'Придумайте пароль',
        }}
      />
    );
  }

  return (
    <Auth mode="register">
      <AuthInputForName />
      <AuthInputForEmail />
      <AuthInputForPassword />
    </Auth>
  );
}
