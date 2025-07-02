import React from 'react';
import MainLayout from '@components/layout/MainLayout';
import { Box, Container, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import { cards } from '@data/cards';
import ProductSection from '@components/sections/ProductSection';

const ProductsPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <MainLayout>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Наши приложения
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Выберите идеальное приложение для вашего проектирования
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
            gap: 2,
          }}
        >
          {cards.map((card, index) => (
            <Card>
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                data-active={selectedCard === index ? '' : undefined}
                sx={{
                  height: '100%',
                  '&[data-active]': {
                    backgroundColor: 'action.selected',
                    '&:hover': {
                      backgroundColor: 'action.selectedHover',
                    },
                  },
                }}
              >
                <CardContent sx={{ height: '100%' }}>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
        <ProductSection
          title={cards[selectedCard].title}
          price={cards[selectedCard].price}
          audience={cards[selectedCard].audience}
          features={cards[selectedCard].features}
        />
      </Container>
    </MainLayout>
  );
};

export default ProductsPage;
