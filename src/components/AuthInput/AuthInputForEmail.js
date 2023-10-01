import AuthInput from './AuthInput';

export default function AuthInputForEmail() {
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
