import AuthInput from '../AuthInput/AuthInput';

export default function AuthInputForName() {
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
