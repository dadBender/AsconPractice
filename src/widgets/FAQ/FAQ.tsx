import { Container, Typography } from '@mui/material';
import { FAQItem } from './FAQItem';
import { faq } from '@features/faq/lib/constants';
import { FAQList } from '@features/faq/model/types';

interface FAQProps {
  items?: FAQList;
  title?: string;
}

export const FAQ = ({ items = faq, title = 'FAQ' }: FAQProps) => {
  return (
    <Container sx={{ mb: 10 }}>
      <Typography variant="h3" align="center" sx={{ mb: 5 }}>
        {title}
      </Typography>
      {items.map((item, index) => (
        <FAQItem key={item.id} item={item} index={index} />
      ))}
    </Container>
  );
};
