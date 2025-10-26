import React from 'react';
import type { Product } from './ProductList.data';
/*
import styles from './styles/ProductList.module.css';

export default function ProductList({ mfData = [] }: { mfData?: Product[] }) {
  
  return (
    <div className={styles.list}>
      {mfData.map((p) => (
        <div key={p.id} className={`${styles.card} ${styles['card--primary']}`}>
          <p className={styles['card__name']}>{p.name}</p>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}
*/


export default function ProductList({ mfData = [] }: { mfData?: Product[] }) {
 
  return (
    <div >
      {mfData.map((p) => (
        <div key={p.id} >
          <p >{p.name}</p>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}
