export default function LoginForm() {
  return (
    <form className="login-form">
      <h3 className="login__title">LOGIN</h3>
      <label>Email / Username</label>
      <input placeholder="johndoe@mail.com" />
      <label>Password</label>
      <input placeholder="Password" />
      <button className="login__submit btn--bordered">LOGIN</button>
      <p className="login__register-notice">
        Don't have an account?{' '}
        <a className="login__link" href="">
          Register.
        </a>
      </p>
      <a className="login__link" href="">
        Forgot Password?
      </a>
    </form>
  );
}
