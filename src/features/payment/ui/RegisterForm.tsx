import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Stack } from '@mui/material';
import { useRegister } from '../model/useRegister';

export const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const register = useRegister();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register.mutate({ email, login, password, subscribe: 'FREE' });
  };

  return (
    <Paper
      elevation={6}
      sx={{
        maxWidth: 400,
        mx: 'auto',
        p: 4,
        borderRadius: 2,
        backgroundColor: '#121212',
        color: '#fff',
      }}
    >
      <Typography variant="h5" gutterBottom align="center">
        Регистрация
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            variant="outlined"
            value={email}
            onChange={e => setEmail(e.target.value)}
            InputLabelProps={{ sx: { color: '#fff' } }}
            InputProps={{
              sx: {
                backgroundColor: '#1e1e1e',
                color: '#fff',
              },
            }}
          />

          <TextField
            label="Логин"
            fullWidth
            required
            variant="outlined"
            value={login}
            onChange={e => setLogin(e.target.value)}
            InputLabelProps={{ sx: { color: '#fff' } }}
            InputProps={{
              sx: {
                backgroundColor: '#1e1e1e',
                color: '#fff',
              },
            }}
          />

          <TextField
            label="Пароль"
            type="password"
            fullWidth
            required
            variant="outlined"
            value={password}
            onChange={e => setPassword(e.target.value)}
            InputLabelProps={{ sx: { color: '#fff' } }}
            InputProps={{
              sx: {
                backgroundColor: '#1e1e1e',
                color: '#fff',
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={register.isPending}
            sx={{
              mt: 1,
              fontWeight: 600,
              textTransform: 'uppercase',
              py: 1.2,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            Зарегистрироваться
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};
