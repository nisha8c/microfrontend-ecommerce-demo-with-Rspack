import { cache, CacheTime } from '@module-federation/bridge-react';

export type CartItem = { id: number; name: string; qty: number };

export const fetchData = cache(
  async (): Promise<{ items: CartItem[] }> => {
    return {
      items: [
        { id: 1, name: 'Laptop', qty: 1 },
        { id: 2, name: 'Headphones', qty: 2 },
      ],
    };
  },
  {
    maxAge: CacheTime.MINUTE * 1,
    tag: 'cart',
    onCache({ status, key }) {
      console.log(`[Cache] ${status} on ${String(key)}`);
      return true; // ✅ Return boolean to satisfy the signature
    },
  }
);
