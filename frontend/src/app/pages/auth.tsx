import LoginForm from '@/components/forms/login-form';
import RegisterForm from '@/components/forms/register-form';

export default function AuthPage() {
  return (
    <div className="auth-container">
      {/* <LoginForm /> */}
      <RegisterForm />
    </div>
  );
}
