
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/CartView';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/CartView' ? typeof import('REMOTE_ALIAS_IDENTIFIER/CartView') :any;