import { Container } from '@mui/material';
import { useProducts } from '@features/products/model/useProducts';
import { ProductSelector } from './ProductSelector';
import { ProductDetails } from './ProductDetails';

export const ProductsPage = () => {
  const { selectedProduct, products, handleSelect } = useProducts();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <ProductSelector products={products} selected={selectedProduct} onSelect={handleSelect} />
      <ProductDetails product={selectedProduct} />
    </Container>
  );
};
