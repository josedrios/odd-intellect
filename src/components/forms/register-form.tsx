import CheckBox from '../checkbox';

export default function RegisterForm() {
  return (
    <form className="auth-form">
      <h3 className="auth-form__title">REGISTER</h3>
      <label>Email</label>
      <input placeholder="johndoe@mail.com" />
      <label>Password</label>
      <input placeholder="Password" />
      <label>Confirm Password</label>
      <input placeholder="Confirm Password" />
      {/* Create a checkbox component */}
      <p className="auth-form__note">
        <CheckBox />I have read and agree to the{' '}
        <a className="auth-form__link">Terms of Service</a> and{' '}
        <a className="auth-form__link">Privacy Policy</a>
      </p>
      <button className="auth-form__submit btn--bordered">REGISTER</button>
      <p className="auth-form__note">
        Already have an account? <a className="auth-form__link">Login</a>
      </p>
    </form>
  );
}
