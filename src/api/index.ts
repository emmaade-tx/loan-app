// api.tsx
import axios from 'axios';

export const fetchUsers = async () => {
  const response = await axios.get('https://run.mocky.io/v3/ea7c1a09-7285-4ed9-806a-4377f015eac6');
  return response.data;
};
