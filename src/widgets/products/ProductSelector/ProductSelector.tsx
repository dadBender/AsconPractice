import { Box, Typography } from '@mui/material';
import { ProductCard } from '@widgets/products/ProductCard';
import { Product } from '@features/products/model/types';

type ProductSelectorProps = {
  products: Product[];
  selected: Product;
  onSelect: (id: number) => void;
};

export const ProductSelector = ({ products, selected, onSelect }: ProductSelectorProps) => {
  return (
    <Box sx={{ mb: 4, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Наши приложения
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Выберите идеальное приложение для вашего проектирования
      </Typography>

      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
          gap: 2,
          mt: 4,
        }}
      >
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={product.id === selected.id}
            onClick={() => onSelect(index)}
          />
        ))}
      </Box>
    </Box>
  );
};
