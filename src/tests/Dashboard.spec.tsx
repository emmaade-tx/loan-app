console.error = jest.fn(); // Suppress console.error warnings

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import * as useFetchUsersModule from '@/hooks/useFetchUsers';
import '@testing-library/jest-dom/extend-expect';

const mockData = [
  { id: 1, organizationName: 'Test Lab', email: 'test@sample.com' },
  { id: 2, organizationName: 'Test Studio', email: 'test@example.com' },
];

jest.spyOn(useFetchUsersModule, 'useFetchUsers').mockReturnValue({
  loading: false,
  data: mockData as never[],
  error: null,
});

// Mock the getUser function
jest.mock('@/store/index', () => ({
  ...jest.requireActual('@/store/index'),
  getUser: jest.fn().mockResolvedValue({ status: 'active' }),
}));

// Mock the openDB function
jest.mock('fake-indexeddb', () => ({
  openDB: jest.fn().mockResolvedValue({
    createObjectStore: jest.fn(),
  }),
}));

describe('Dashboard', () => {
  test('renders dashboard component', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    
    //asserting title
    expect(screen.getByText('Users', { selector: 'div.title' })).toBeInTheDocument();
    //asserting user analysis
    expect(screen.getByText('Users', { selector: 'p.card-text' })).toBeInTheDocument();
    expect(screen.getByText('Active Users')).toBeInTheDocument();
    expect(screen.getByText(/Users with Loans/i)).toBeInTheDocument();
    expect(screen.getByText(/Users with savings/i)).toBeInTheDocument();
    //asserting table data
    expect(screen.getByText('Test Lab')).toBeInTheDocument();
    expect(screen.getByText('Test Studio')).toBeInTheDocument();
  });
});
