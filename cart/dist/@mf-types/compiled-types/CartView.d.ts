import type { CartItem } from './CartView.data';
export default function CartView({ mfData }: {
    mfData?: {
        items: CartItem[];
    };
}): import("react/jsx-runtime").JSX.Element;
