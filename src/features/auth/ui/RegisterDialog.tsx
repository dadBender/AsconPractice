import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema, RegisterFormData } from './AuthValidation';
import { useRegister } from '../model/useRegister';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const RegisterDialog = ({ open, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const mutation = useRegister();

  const onSubmit = async (data: RegisterFormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Регистрация</DialogTitle>
      <DialogContent>
        <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register('email')}
            />
            <TextField
              label="Логин"
              fullWidth
              error={!!errors.login}
              helperText={errors.login?.message}
              {...register('login')}
            />
            <TextField
              label="Пароль"
              type="password"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
              {...register('password')}
            />
          </Stack>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={isSubmitting}>
          Отмена
        </Button>
        <Button form="register-form" type="submit" variant="contained" disabled={isSubmitting}>
          Зарегистрироваться
        </Button>
      </DialogActions>
    </Dialog>
  );
};
