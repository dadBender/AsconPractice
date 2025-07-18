import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from '../../shared/ui/Link/Link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { logout } from '@features/auth/authSlice';
import { LanguageSwitcher } from '../../shared/ui/LanguageSwitcher/LanguageSwitcher';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href="/public" passHref sx={{ textDecoration: 'none' }}>
            <Box sx={{ color: 'inherit', textDecoration: 'none' }}>ASCON</Box>
          </Link>
        </Typography>
        <LanguageSwitcher />

        <Box>
          <Link href="/products" underline="hover" sx={{ mr: '10px' }}>
            Продукты
          </Link>

          {isAuthenticated ? (
            <>
              <Link href="/app/account" underline="hover">
                Личный кабинет
              </Link>
              <Button onClick={() => dispatch(logout())}>Выйти</Button>
            </>
          ) : (
            <Link href="/app/auth" underline="hover">
              Вход
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
