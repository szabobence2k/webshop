export interface Cart {
    items: Array<CartItem>;
}

export interface CartItem {
    product: string;
    name: string;
    price: number;
    quantity: number;
    id: number;
}

export interface Product {
    id: number;
    price: number;
    title: string;
    category: string;
    description: string;
    image: string;
}