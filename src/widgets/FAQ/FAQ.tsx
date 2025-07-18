import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import { faq } from '../../data';

export const FAQ: React.FC = () => {
  return (
    <Container sx={{ mb: 10 }}>
      <Typography variant="h3" align="center" sx={{ mb: 5 }}>
        FAQ
      </Typography>
      {faq.map((faq, index) => (
        <Accordion
          key={index}
          elevation={3}
          sx={{
            mb: 2,
            '&::before': { display: 'none' },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMore sx={{ color: 'primary.main' }} />}>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              {index + 1}. {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: 'grey.50',
              p: 3,
            }}
          >
            <Typography variant="body1" color="text.secondary">
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};
