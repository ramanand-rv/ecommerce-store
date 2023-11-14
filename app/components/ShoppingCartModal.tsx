'use client'
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from 'use-shopping-cart'


export default function ShoppingCartModal() {
    const { cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice, redirectToCheckout } = useShoppingCart();

    async function handleChckOutClick(event: any) {
        event.preventDefault();
        try{
            const result = await redirectToCheckout();
            if(result?.error){
                console.log('result');
            }
        } catch (error){
            console.log(error);
        }
    }

    return (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
            <SheetContent className=" sm:max-w-lg w=[99vw]">

                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>

                <div className=" h-full flex flex-col justify-between">
                    <div className=" mt-8 flex-1 overflow-y-auto">
                        <ul className=" -my-6 divide-y divide-gray-200">
                            {cartCount === 0 ? (
                                <h1 className="py-6"> Your cart is empty</h1>
                            ) : (
                                <>
                                    {Object.values(cartDetails ?? {}).map((entry) => (
                                        <li key={entry.id} className=" flex py-6">
                                            <div className=" py-6 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-x-gray-200">
                                                <Image src={entry.image as string}
                                                    alt="Product image"
                                                    height={100}
                                                    width={100}
                                                />
                                            </div>

                                            <div className=" ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3 className=" font-semibold">{entry.name}</h3>
                                                        <p className=" ml-4 font-bold">Rs {entry.price}</p>
                                                    </div>
                                                    <p className=" mt-1 text-sm line-clamp-2">{entry.description}</p>
                                                </div>
                                                <div className=" flex flex-1 items-end justify-between text-sm">
                                                    <p className=" font-semibold text-gray-500">Qty: {entry.quantity}</p>
                                                    <div className=" flex">
                                                        <button type="button"
                                                            className=" font-medium text-primary hover:text-primary/80"
                                                            onClick={() => removeItem(entry.id)}
                                                        >Remove</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                    ))}
                                </>
                            )}

                        </ul>
                    </div>
                    <div className=" border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className=" flex justify-between text-base font-medium text-gray-900">
                            <p className=" font-semibold">Subtotal: </p>
                            <p className=" font-semibold">Rs {totalPrice}</p>
                        </div>
                        <p className=" text-sm mt-0.5 text-gray-500">Includes shipping and taxes</p>
                        <div className=" mt-6">
                            <Button className=" w-full" onClick={handleChckOutClick}>
                                Checkout
                            </Button>
                        </div>

                        <div className=" mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                OR <button className=" font-medium text-primary hover:text-primary/80" onClick={()=> handleCartClick()}>Continue Shopping</button>

                            </p>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>

    )
}