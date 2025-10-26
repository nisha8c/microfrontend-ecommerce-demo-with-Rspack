import React from 'react';
import type { CartItem } from './CartView.data';

export default function CartView({ mfData }: { mfData?: { items: CartItem[] } }) {
  return (
    <div>
      <h3>🛒 Cart</h3>
      {mfData?.items.map((i) => (
        <p key={i.id}>
          {i.name} × {i.qty}
        </p>
      ))}
    </div>
  );
}
