import LoginForm from '@/components/LoginForm';
import { ReactComponent as Logo } from '@/assets/images/logo.svg'; 
import { ReactComponent as PabloSignIn } from '@/assets/images/pablo-sign-in.svg';
import { useNavigate } from 'react-router-dom';
import '@/assets/styles/loginForm.scss';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (email: string, password: string) => {
    // Handle form submission logic here
    console.log(`Email: ${email}, Password: ${password}`);

    // Navigate to Dashboard after successful login
    navigate('/dashboard');
  };

  return (
    <div className='login-container'>
      <div className='logo-wrapper'>
        <Logo className='logo'/>
      </div>
      <div className='login-left'>
        <PabloSignIn className='pablo-sign-in' />
      </div>
      <div className='login-right'>
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
