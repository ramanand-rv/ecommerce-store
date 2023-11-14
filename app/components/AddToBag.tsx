'use client'
import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';

export interface CartProduct {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any;
}

export default function AddToBag(
    {
        currency,
        description,
        image,
        name,
        price,
    }: CartProduct) {
    const { addItem, handleCartClick } = useShoppingCart();

    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: image,
        id: "febgerbgh"
    };
    return <Button onClick={()=>{
        addItem(product),
        handleCartClick();
    }}> Add to Cart </Button>;
}