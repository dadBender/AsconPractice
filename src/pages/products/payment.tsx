import { useState, useMemo } from 'react';
import MainLayout from '@components/layout/MainLayout';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
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

const PaymentPage = () => {
  const [subscribe, setSubscribe] = useState('');
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const isProVersion = useMemo(() => subscribe === 'Pro', [subscribe]);

  interface PaymentFormData {
    name: string;
    email: string;
    subscribe: string;
    company?: string;
  }

  const handleChangeSubscribe = (event: SelectChangeEvent) => {
    const newValue = event.target.value;
    setSubscribe(newValue);
  };
  const handleChangeCompany = (event: SelectChangeEvent) => {
    const newValue = event.target.value;
    setCompany(newValue);
  };

  const mutation = useMutation({
    mutationFn: (formData: PaymentFormData) => axios.post('/api/payment', formData),
    onSuccess: data => console.log(data),
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutation.mutate({ name, email, subscribe, company });
  };

  return (
    <MainLayout>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Страница оплаты
        </Typography>
        <Box
          component={'form'}
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        >
          <TextField
            required
            id="payment-name"
            label="Имя"
            defaultValue=""
            onChange={e => setName(e.target.value)}
          />
          <TextField
            required
            id="payment-email"
            label="Почта"
            defaultValue=""
            onChange={e => setEmail(e.target.value)}
          />
          <FormControl>
            <InputLabel id="subscribe-select">Подписка</InputLabel>
            <Select
              labelId="subscribe-select"
              id="subscribe-select"
              value={subscribe}
              label="Подписка"
              onChange={handleChangeSubscribe}
              sx={{ width: '100%' }}
            >
              <MenuItem value="Plus">Plus</MenuItem>
              <MenuItem value="Pro">Pro</MenuItem>
            </Select>
            {!isProVersion && (
              <FormHelperText>Продолжая оплату вы соглашаетесь на обработку данных</FormHelperText>
            )}
          </FormControl>
          {isProVersion && (
            <FormControl>
              <InputLabel id="company-select">Компания</InputLabel>
              <Select
                labelId="company-select"
                id="company-select"
                value={company}
                label="Компания"
                onChange={handleChangeCompany}
                sx={{ width: '100%' }}
              >
                <MenuItem value="A">A</MenuItem>
                <MenuItem value="B">B</MenuItem>
              </Select>
              <FormHelperText>Продолжая оплату вы соглашаетесь на обработку данных</FormHelperText>
            </FormControl>
          )}
          <Button variant="contained" type="submit">
            Оплатить
          </Button>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default PaymentPage;
