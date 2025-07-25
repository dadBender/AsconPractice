import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import { benefits } from '@features/benefits/lib/constants';
import type { Benefit, BenefitsList } from '@features/benefits/model/types';
import Grid from '@mui/material/Grid';

interface BenefitsProps {
  items?: BenefitsList;
}

export const Benefits = ({ items = benefits }: BenefitsProps) => {
  return (
    <Container sx={{ mb: 10 }}>
      <Typography variant="h3" align="center" sx={{ mb: 5 }}>
        Почему выбирают ASCON Thread?
      </Typography>
      <Grid container spacing={2}>
        {items.map((benefit, index) => (
          <Grid item key={index} xs={12} sm={6} lg={3}>
            <BenefitCard benefit={benefit} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

interface BenefitCardProps {
  benefit: Benefit;
}

const BenefitCard = ({ benefit }: BenefitCardProps) => {
  const { Icon, title, description } = benefit;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'transform 0.3s, box-shadow 0.3s',
        p: 3,
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 80,
          height: 80,
          mb: 2,
        }}
      >
        <Icon sx={{ fontSize: 50, color: 'primary.main' }} />
      </Box>

      <CardContent sx={{ p: 0 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
