import { Card, CardContent, Typography } from '@mui/material';
import { Product } from '@features/products/model/types';

type ProductCardProps = {
  product: Product;
  isSelected: boolean;
  onClick: () => void;
};

export const ProductCard = ({ product, isSelected, onClick }: ProductCardProps) => {
  return (
    <Card
      sx={{
        height: '100%',
        backgroundColor: isSelected ? 'action.selected' : undefined,
        '&:hover': {
          backgroundColor: isSelected ? 'action.selectedHover' : undefined,
        },
      }}
      onClick={onClick}
    >
      <CardContent sx={{ height: '100%' }}>
        <Typography variant="h5" component="div">
          {product.title}
        </Typography>
        {product.description && (
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
