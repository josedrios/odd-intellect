import { Link } from 'react-router-dom';
import { useAuthCtx } from '@/context/auth-context';
import { useState } from 'react';
import { loginUser } from '@/users/user.api';

export default function LoginForm() {
  type LoginForm = {
    username: string;
    password: string;
  };
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: '',
    password: '',
  });

  const { login } = useAuthCtx();
  async function handleSubmit() {
    const loginAttempt = await loginUser(loginForm);
    login(loginAttempt.username, loginAttempt.id);
  }

  return (
    <form
      className="auth-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h3 className="auth-form__title">LOGIN</h3>
      <label>Username</label>
      <input
        placeholder="JohnDoe123"
        value={loginForm.username}
        onChange={(e) =>
          setLoginForm((prev) => ({ ...prev, username: e.target.value }))
        }
      />
      <label>Password</label>
      <input
        placeholder="Password"
        value={loginForm.password}
        onChange={(e) =>
          setLoginForm((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <button className="auth-form__submit btn--bordered" type="submit">
        LOGIN
      </button>
      <p className="auth-form__note">
        Don't have an account?{' '}
        <Link className="auth-form__link" to="/register">
          Register.
        </Link>
      </p>
      <a className="auth-form__link" href="">
        Forgot Password?
      </a>
    </form>
  );
}
