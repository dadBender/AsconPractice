import axios from 'axios';

export const getUserProfile = async () => {
  const response = await axios.get('/api/profile');
  return response.data;
};
