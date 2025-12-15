export default function LoginForm() {
  return (
    <form className="auth-form">
      <h3 className="auth-form__title">LOGIN</h3>
      <label>Email / Username</label>
      <input placeholder="johndoe@mail.com" />
      <label>Password</label>
      <input placeholder="Password" />
      <button className="auth-form__submit btn--bordered">LOGIN</button>
      <p className="auth-form__note">
        Don't have an account?{' '}
        <a className="auth-form__link" href="">
          Register.
        </a>
      </p>
      <a className="auth-form__link" href="">
        Forgot Password?
      </a>
    </form>
  );
}
