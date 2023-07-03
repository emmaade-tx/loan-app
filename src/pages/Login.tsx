import React from 'react';
import LoginForm from '@/components/LoginForm';
import { ReactComponent as Logo } from '@/assets/images/logo.svg';
import { ReactComponent as PabloSignIn } from '@/assets/images/pablo-sign-in.svg';
import '@/assets/styles/loginForm.scss';

const Login: React.FC = () => {
  const handleSubmit = (email: string, password: string) => {
    // Handle form submission logic here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className='login-container'>
      <div className='login-left'>
        <Logo/>
        <div>
            <PabloSignIn />
        </div>
      </div>
      <div className='login-right'>
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
