import axios from 'axios';
import { IRegisterForm } from '@shared/types/user';

export const registerUser = async (data: IRegisterForm) => {
  const response = await axios.post('/api/payment', data);
  return response.data;
};
