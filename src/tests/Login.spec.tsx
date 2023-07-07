console.error = jest.fn(); // Suppress console.error warnings

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Login from '@/pages/Login';

describe('Login', () => {
  test('renders login component', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(screen.getByText('LOG IN')).toBeInTheDocument();
  });

  test('renders child components', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(screen.getByText('Welcome!')).toBeInTheDocument();
    expect(screen.getByText('Enter details to login.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });
});
