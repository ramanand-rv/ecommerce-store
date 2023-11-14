'use client'
import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { urlFor } from '../lib/sanity';
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
    function buyNow(priceId: string) {
        checkoutSingleItem(priceId);
    }

    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image),
        price_id: price_id,
    };
    return <Button className=' border bg-gray-600 text-white hover:bg-gray-600/70 hover:text-white' variant={'outline'} onClick={() => {
        buyNow(product.price_id)
    }}> Checkout Now </Button>;
}