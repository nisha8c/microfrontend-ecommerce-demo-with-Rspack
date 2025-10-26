import type { DataFetchParams } from '@module-federation/bridge-react';

export type Product = { id: number; name: string; price: number };

export const fetchData = async (_: DataFetchParams): Promise<Product[]> => {
  return [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Headphones', price: 199 },
    { id: 3, name: 'Monitor', price: 349 },
  ];
};
