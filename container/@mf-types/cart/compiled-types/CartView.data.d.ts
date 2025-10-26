export type CartItem = {
    id: number;
    name: string;
    qty: number;
};
export declare const fetchData: (params: import("@module-federation/bridge-react").DataFetchParams) => Promise<{
    items: CartItem[];
}>;
