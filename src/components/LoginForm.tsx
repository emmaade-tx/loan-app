import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Start loading
    setLoading(true);
    
    // Validate email and password
    if (email === '' || password === '') {
      toast.error('Email and password are required!');
      setLoading(false);
      return;
    }

    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email!');
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long!');
      setLoading(false);
      return;
    }

    // Simulate a network request delay
    setTimeout(() => {
      onSubmit(email, password);
      // End loading
      setLoading(false);
      toast.success("Login successful!");
    }, 500);
  };


  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <div className='login-header'>
        <h1 className='login-title'>Welcome!</h1>
        <p className='login-text'>Enter details to login.</p>
      </div>
      
      <div>
        <input
          type="email"
          value={email}
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
        <p className='forgot-password-text'>FORGOT PASSWORD?</p>
      </div>
      <div>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'LOG IN'}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;