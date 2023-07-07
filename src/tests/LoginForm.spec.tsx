import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '@/components/LoginForm';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { act } from 'react-dom/test-utils';

// Enable fake timers
jest.useFakeTimers();

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('LoginForm', () => {
  test('validates email and password', () => {
    render(<LoginForm onSubmit={jest.fn()} />);

    // Enter an invalid email and password
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: '' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: '' },
    });

    fireEvent.submit(screen.getByRole('button', { name: 'LOG IN' }));

    // Check that toast.error is called with the correct message
    expect(toast.error).toHaveBeenCalledWith('Email and password are required!');
  });

  test('validates valid email', () => {
    render(<LoginForm onSubmit={jest.fn()} />);

    // Enter an invalid email and password
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'invalid-email' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'short' },
    });

    fireEvent.submit(screen.getByRole('button', { name: 'LOG IN' }));

    // Check that toast.error is called with the correct message
    expect(toast.error).toHaveBeenCalledWith('Please enter a valid email!');
  });

  test('validates valid password', () => {
    render(<LoginForm onSubmit={jest.fn()} />);

    // Enter an invalid email and password
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'short' },
    });

    fireEvent.submit(screen.getByRole('button', { name: 'LOG IN' }));

    // Check that toast.error is called with the correct message
    expect(toast.error).toHaveBeenCalledWith('Password must be at least 8 characters long!');
  });

  test('submits login form', () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });

    // Trigger form submission
    act(() => {
      fireEvent.submit(screen.getByRole('button', { name: 'LOG IN' }));
    });

    // Fast-forward timers
    act(() => {
      jest.runAllTimers();
    });

    // Assert that the submit function has been called
    expect(mockSubmit).toHaveBeenCalled();

    // Assert that the toast.success function has been called
    expect(toast.success).toHaveBeenCalledWith('Login successful!');
  });
});
