import React from 'react';
import MainLayout from '@components/layout/MainLayout';
import { Button, TextField, Box } from '@mui/material';

const AuthenticationPage: React.FC = () => {
  return (
    <MainLayout>
      <Box
        component="form"
        noValidate
        autoComplete="on"
        sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
        <TextField required id="outlined-required" label="Логин" defaultValue="" />
        <TextField
          id="outlined-password-input"
          label="Пароль"
          type="password"
          autoComplete="current-password"
        />
        <Button
          variant="contained"
          onClick={() => {
            console.log('a');
          }}
        >
          Войти
        </Button>
      </Box>
    </MainLayout>
  );
};

export default AuthenticationPage;
