import React, { useState } from 'react';
import { useLogin } from '../model/useLogin';
import { TextField, Button, Box } from '@mui/material';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <TextField
        label="Пароль"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button type="submit" disabled={loginMutation.isLoading}>
        Войти
      </Button>
    </Box>
  );
};
