import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from '@components/common/Link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store/index';
import { logout } from '@features/auth/authSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref sx={{ color: '#ff5722', textDecoration: 'none' }}>
            <Box sx={{ color: 'inherit', textDecoration: 'none' }}>ASCON</Box>
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
              <Button sx={{ color: '#ff5722' }} onClick={() => dispatch(logout())}>
                Выйти
              </Button>
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
