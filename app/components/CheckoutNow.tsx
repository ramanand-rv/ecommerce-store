'use client'
import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { CartProduct } from './AddToBag';

export default function CheckoutNow(
    {
        currency,
        description,
        image,
        name,
        price,
        price_id,
    }: CartProduct) {
    const { checkoutSingleItem } = useShoppingCart();

    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: image,
        price_id: price_id,
    };

    function buyNow(priceId:string) {
        checkoutSingleItem(priceId);
    }
    return <Button onClick={() => {
        buyNow(product.price_id)
    }}> Add to Cart </Button>;
}