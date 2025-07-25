import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { FAQItemModel } from '@features/faq/model/types';

interface FAQItemProps {
  item: FAQItemModel;
  index: number;
}

export const FAQItem = ({ item, index }: FAQItemProps) => (
  <Accordion
    elevation={3}
    sx={{
      mb: 2,
      '&::before': { display: 'none' },
    }}
  >
    <AccordionSummary expandIcon={<ExpandMore sx={{ color: 'primary.main' }} />}>
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        {index + 1}. {item.question}
      </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ backgroundColor: 'grey.50', p: 3 }}>
      <Typography variant="body1" color="text.secondary">
        {item.answer}
      </Typography>
    </AccordionDetails>
  </Accordion>
);
