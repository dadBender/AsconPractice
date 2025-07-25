import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { RegisterFormData } from '../ui/AuthValidation';

export const useRegister = () =>
  useMutation({
    mutationFn: (data: RegisterFormData) =>
      axios.post('/api/payment', {
        ...data,
        subscribe: 'FREE',
      }),
  });
