import LoginForm from '@/components/forms/login-form';
import SignForm from '@/components/forms/sign-form';

export default function AuthenticationPage() {
  return (
    <div className="authentication-container">
      <LoginForm />
      {/* <SignForm /> */}
    </div>
  );
}
