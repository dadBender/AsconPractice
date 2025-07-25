import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '@entities/user/model/userSlice';
import { getUserProfile } from '@shared/api/userApi';

interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (data: LoginData) => axios.post('/api/login', data),
    onSuccess: async () => {
      const user = await getUserProfile();
      dispatch(setUser(user));
    },
  });
};
