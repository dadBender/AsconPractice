import { Box, Typography } from '@mui/material';
import { Product } from '@features/products/model/types';

type ProductDetailsProps = {
  product: Product;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        {product.title} - {product.price}₽
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Для: {product.audience}
      </Typography>
      <Box component="ul" sx={{ pl: 2 }}>
        {product.features.map((feature, index) => (
          <Typography key={index} component="li" variant="body1">
            {feature}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
