export interface Product {
  id: number;
  title: string;
  price: string;
  description?: string;
  audience: string;
  features: string[];
}

export type ProductsList = Product[];
