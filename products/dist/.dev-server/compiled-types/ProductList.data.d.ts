import type { DataFetchParams } from '@module-federation/bridge-react';
export type Product = {
    id: number;
    name: string;
    price: number;
};
export declare const fetchData: (_: DataFetchParams) => Promise<Product[]>;
