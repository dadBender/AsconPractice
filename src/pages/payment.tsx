import { Container } from '@mui/material';
import { RegisterForm } from '@features/payment/ui/RegisterForm';

export default function PaymentPage() {
  return (
    <Container sx={{ mt: 6 }}>
      <RegisterForm />
    </Container>
  );
}
