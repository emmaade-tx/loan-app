console.error = jest.fn(); // Suppress console.error warnings

import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import UserDetail from '@/pages/UserDetail';
import * as storeModule from '@/store';
import '@testing-library/jest-dom/extend-expect';

const mockUser = {
  email: 'john@example.com',
  status: 'active',
  profile: {
    id: 1,
    firstName: 'John',
    lastName: "Doe",
    phoneNumber: '1234567890',
    bvn: '1234433',
  },
  education: {
    level: 'bsc',
    monthlyIncome: ['234']
  },
  guarantor: {
    firstname: "Jogn Dee"
  },
  socials: {
    twiter: "@john",
    facebook: "@john",
    instagram: "@john"
  }
};

jest.spyOn(storeModule, 'getUser').mockResolvedValue(mockUser);

describe('UserDetail', () => {
  test('renders user detail component with user data', async () => {
    const userId = '1';

    render(
      <MemoryRouter initialEntries={[`/dashboard/user/${userId}`]}>
        <Routes>
          <Route path="/dashboard/user/:id" element={<UserDetail />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for the user data to be fetched and rendered
    await screen.findByText('User Details');

    // Check if the user detail component is rendered with the correct user data

    //CardTabs
    expect(screen.getByText('User Details', { selector: 'div.title' })).toBeInTheDocument();
    expect(screen.getByText("John Doe", { selector: '#profile-name' })).toBeInTheDocument();

    //CardDetails
    expect(screen.getByText('Personal Information', { selector: '#titlePi' })).toBeInTheDocument();
    expect(screen.getByText("1234567890", { selector: '#phoneNumber' })).toBeInTheDocument();
  });
});
