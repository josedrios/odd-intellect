import { Link } from 'react-router-dom';
import { useState } from 'react';
import CheckBox from '@/components/checkbox';
import { createUser } from '@/users/user.api';

type RegisterForm = {
  email: string;
  username: string;
  password: string;
};

export default function RegisterForm() {
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    email: '',
    username: '',
    password: '',
  });

  async function handleSubmit() {
    try {
      await createUser(registerForm);
    } catch (err) {
      console.log('Error on user creation: ', err);
    }
  }

  return (
    <form
      className="auth-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h3 className="auth-form__title">REGISTER</h3>
      <label>Email</label>
      <input
        placeholder="johndoe@mail.com"
        value={registerForm.email}
        onChange={(e) => {
          setRegisterForm((prev) => ({ ...prev, email: e.target.value }));
        }}
      />
      <label>Username</label>
      <input
        placeholder="JohnDoe123"
        value={registerForm.username}
        onChange={(e) => {
          setRegisterForm((prev) => ({ ...prev, username: e.target.value }));
        }}
      />
      <label>Password</label>
      <input
        placeholder="Password"
        value={registerForm.password}
        onChange={(e) => {
          setRegisterForm((prev) => ({ ...prev, password: e.target.value }));
        }}
      />
      {/* Create a checkbox component */}
      <p className="auth-form__note">
        <CheckBox />I have read and agree to the{' '}
        <a className="auth-form__link">Terms of Service</a> and{' '}
        <a className="auth-form__link">Privacy Policy</a>
      </p>
      <button className="auth-form__submit btn--bordered" type="submit">
        REGISTER
      </button>
      <p className="auth-form__note">
        Already have an account?{' '}
        <Link to="/login" className="auth-form__link">
          Login
        </Link>
      </p>
    </form>
  );
}
