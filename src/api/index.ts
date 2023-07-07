// api.tsx
import axios from 'axios';

export const fetchUsers = async () => {
  const response = await axios.get('https://64a72af6096b3f0fcc81219d.mockapi.io/api/v1/users');
  return response.data;
};
