import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from '@components/common/Link';

const Header: React.FC = () => {
  // Примерная заглушка логики авторизации (заменишь позже на real auth)
  const isAuthenticated = false;

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref sx={{ color: '#ff5722' }}>
            <Box sx={{ color: 'inherit', textDecoration: 'none' }}>ASCON Thread App</Box>
          </Link>
        </Typography>

        <Box>
          <Link href="/products" underline="hover" sx={{ color: '#ff5722', mr: '10px' }}>
            Продукты
          </Link>

          {isAuthenticated ? (
            <>
              <Link href="/account" underline="hover" sx={{ color: '#ff5722' }}>
                Личный кабинет
              </Link>
              <Button sx={{ color: '#ff5722' }}>Выйти</Button>
            </>
          ) : (
            <Link href="/auth" underline="hover" sx={{ color: '#ff5722' }}>
              Вход
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
