import React from 'react';
import ProductList from './ProductList';
import { fetchData } from './ProductList.data';
import type { Product } from './ProductList.data';

export default function App() {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    fetchData({ isDowngrade: false }).then(setProducts);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>🧩 Products Microfrontend</h2>
      {products.length > 0 ? (
        <ProductList mfData={products} />
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}
