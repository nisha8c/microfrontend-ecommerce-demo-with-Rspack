
    export type RemoteKeys = 'cart/CartView';
    type PackageType<T> = T extends 'cart/CartView' ? typeof import('cart/CartView') :any;