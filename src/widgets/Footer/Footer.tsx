import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import Link from '../../shared/ui/Link/Link';

const Footer: React.FC = () => {
  const isAuthenticated = false;
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} ASCON Thread App. Все права защищены.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, gap: 2 }}>
          <Link href="/public" passHref sx={{ color: '#ff5722' }}>
            Главная
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
      </Container>
    </Box>
  );
};

export default Footer;
