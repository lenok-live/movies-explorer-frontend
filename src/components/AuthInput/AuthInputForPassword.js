import AuthInput from './AuthInput';

export default function AuthInputForPassword() {
  return (
    <AuthInput
      label="Пароль"
      params={{
        type: 'password',
        name: 'password',
        required: true,
        placeholder: 'Введите пароль',
        minlength: '8',
      }}
    />
  );
}
