import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../api/registerUser';

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};
