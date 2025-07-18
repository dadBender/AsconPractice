import { Box, Typography, List, ListItem, Button } from '@mui/material';
import NextLink from 'next/link';
import React from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  audience: string;
  features: string[];
}

const ProductSection: React.FC<ProductCardProps> = ({ title, price, audience, features }) => {
  return (
    <Box component={'section'}>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {price}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {audience}
      </Typography>
      <List dense>
        {features.map((feature, index) => (
          <ListItem key={index}>• {feature}</ListItem>
        ))}
      </List>
      <NextLink href="/products/payment" passHref legacyBehavior>
        <Button component="a" variant="contained">
          Купить
        </Button>
      </NextLink>
    </Box>
  );
};

export default ProductSection;
