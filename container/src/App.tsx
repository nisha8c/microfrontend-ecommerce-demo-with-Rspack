import React from 'react';
import { getInstance } from '@module-federation/enhanced/runtime';
import { lazyLoadComponentPlugin, ERROR_TYPE } from '@module-federation/bridge-react';

const instance = getInstance();
instance!.registerPlugins([lazyLoadComponentPlugin()]);

const ProductList = instance!.createLazyComponent({
  loader: () => import('products/ProductList'),
  loading: 'Loading products...',
  export: 'default',
  fallback: ({ error, errorType }) => (
    <div>
      {errorType === ERROR_TYPE.LOAD_REMOTE
        ? '❌ Cannot load products'
        : 'Unknown error'}{' '}
      ({error?.message})
    </div>
  ),
});

const CartView = instance!.createLazyComponent({
  loader: () => import('cart/CartView'),
  loading: 'Loading cart...',
  export: 'default',
  fallback: ({ error, errorType }) => (
    <div>
      {errorType === ERROR_TYPE.LOAD_REMOTE
        ? '❌ Cannot load cart'
        : 'Unknown error'}
      {error?.message && <span> ({error.message})</span>}
    </div>
  ),
});

const handlePrefetch = () => {
  instance!.prefetch({
    id: 'products/ProductList',
    preloadComponentResource: true,
  });
  console.log('Prefetching ProductList...');
};

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🛍️ Microfrontend Shop (Container)</h1>

      <button onMouseEnter={handlePrefetch}>Hover to Prefetch Products</button>

      <div style={{ display: 'flex', gap: '2rem', marginTop: 20 }}>
        <ProductList />
        <CartView />
      </div>
    </div>
  );
}
