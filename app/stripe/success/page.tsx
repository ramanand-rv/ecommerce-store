import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from 'next/link';

export default function StripeSuccess() {
    return (
        <div className=" mt-32 md:max-w-[50vw] mx-auto">
            <CheckCheck className=" text-green-600 w-16 h-16 mx-auto my-6" />
            <div className=" text-center">
                <h3 className=" md:text-2xl text-base text-gray-900 font-semibold  text-center ">Order Confirmed...</h3>
                <p>Thank you for your purchase. We hope you visit again.</p>
                <p>Have a great day!</p>

                <Button asChild className=" mt-5">
                    <Link href="/">
                        Continue Shopping
                    </Link>
                </Button>
            </div>
        </div>
    )
}