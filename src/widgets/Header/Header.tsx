'use client'; // если ты используешь App Router

import React from 'react';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@app/store';
import { logout } from '@features/auth/authSlice';
import { LanguageSwitcher } from '@shared/ui/LanguageSwitcher/LanguageSwitcher';
import { useRouter } from 'next/router';
import { RegisterDialog } from '@features/auth/ui/RegisterDialog';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { pathname } = useRouter();

  const [registerOpen, setRegisterOpen] = React.useState(false);

  const navLinks = [
    { label: 'Личный кабинет', href: '/account', authOnly: true },
    { label: 'Вход', href: '/auth', guestOnly: true },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Link href="/" passHref legacyBehavior>
            <Box
              component="a"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                letterSpacing: '2px',
                color: 'primary.main',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
            >
              ASCON
            </Box>
          </Link>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navLinks.map(({ label, href, authOnly, guestOnly }) => {
              if ((authOnly && !isAuthenticated) || (guestOnly && isAuthenticated)) return null;

              const isActive = pathname.startsWith(href);

              return (
                <Link key={href} href={href} passHref legacyBehavior>
                  <Button
                    component="a"
                    sx={{
                      color: isActive ? 'primary.light' : 'primary.main',
                      position: 'relative',
                      fontSize: '0.9rem',
                      textTransform: 'none',
                      fontWeight: 500,
                      px: 1,
                      py: 0.5,
                      borderRadius: 0,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: isActive ? '100%' : '0%',
                        height: '2px',
                        backgroundColor: 'primary.main',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {label}
                  </Button>
                </Link>
              );
            })}

            {!isAuthenticated && (
              <>
                <Button
                  onClick={() => setRegisterOpen(true)}
                  sx={{
                    color: registerOpen ? 'primary.light' : 'primary.main',
                    position: 'relative',
                    fontSize: '0.9rem',
                    textTransform: 'none',
                    fontWeight: 500,
                    px: 1,
                    py: 0.5,
                    borderRadius: 0,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: registerOpen ? '100%' : '0%',
                      height: '2px',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  Регистрация
                </Button>
              </>
            )}

            {isAuthenticated && (
              <Button
                onClick={() => dispatch(logout())}
                sx={{
                  color: 'primary.main',
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  fontWeight: 500,
                  px: 1,
                  py: 0.5,
                  borderRadius: 0,
                }}
              >
                Выйти
              </Button>
            )}

            <LanguageSwitcher />
          </Box>
        </Toolbar>
      </Container>

      <RegisterDialog open={registerOpen} onClose={() => setRegisterOpen(false)} />
    </AppBar>
  );
};

export default Header;
