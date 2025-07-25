import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

export const CallToAction: React.FC = () => {
  return (
    <Container sx={{ mb: 10 }}>
      <Typography variant="h3" align="center" mb="20px">
        Попробуйте ASCON Thread уже сегодня и&nbsp;ускорьте процесс проектирования!
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button href="/auth" variant="contained">
          Скачать
        </Button>
      </Box>
    </Container>
  );
};
