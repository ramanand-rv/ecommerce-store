'use client'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'


export default function ShoppingCartModal() {
    const {cartCount, shouldDisplayCart, handleCartClick} = useShoppingCart();
    return (
        <Sheet open = {shouldDisplayCart} onOpenChange={()=> handleCartClick()}>
            <SheetContent className=" sm:max-w-lg w=[99vw]">

                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>

                <div className=" h-full flex flex-col justify-between">
                    <div className=" mt-8 flex-1 overflow-y-auto">
                        <ul className=" -my-6 divide-y divide-gray-200">
                            {cartCount === 0 ? (
                                <h1 className="py-6"> Your cart is empty</h1>
                            ): (
                                <h1>Items hai yaar</h1>
                            )}

                        </ul>
                    </div>
                </div>
            </SheetContent>
        </Sheet>

    )
}