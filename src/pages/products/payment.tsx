import React from 'react';
import MainLayout from '@components/layout/MainLayout';
import {
  Typography,
  Container,
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent,
} from '@mui/material';
import { cards } from '@data/cards';

const PaymentPage: React.FC = () => {
  const [subscribe, setSubscribe] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSubscribe(event.target.value);
  };
  return (
    <MainLayout>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Страница оплаты
        </Typography>
        <Box component={'form'} sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <TextField required id="payment-name" label="Имя" defaultValue="" />
          <TextField required id="payment-email" label="Почта" defaultValue="" />
          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">Подписка</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={subscribe}
              label="Подписка"
              onChange={handleChange}
              sx={{ width: '100%' }}
            >
              {cards.map(card => (
                <MenuItem value={card.title}>{card.title}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Продолжая оплату вы соглашаетесь на обработку данных</FormHelperText>
          </FormControl>
          <Button
            variant="contained"
            onClick={() => {
              console.log('a');
            }}
          >
            Оплатить
          </Button>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default PaymentPage;
