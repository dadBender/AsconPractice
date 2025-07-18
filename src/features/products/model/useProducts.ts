import { useState } from 'react';
import { products } from '../lib/constants';

export const useProducts = () => {
  const [selectedId, setSelectedId] = useState(0);

  const handleSelect = (id: number) => setSelectedId(id);

  return {
    products,
    selectedProduct: products[selectedId],
    handleSelect,
  };
};
