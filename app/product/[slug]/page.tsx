import ImageGallery from "@/app/components/ImageGallery";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { fullProduct } from "@/interface";
import { StarIcon, Truck, TruckIcon } from "lucide-react";

async function getData(slug: string) {
    const query = `*[_type=='product' && slug.current=='${slug}'][0]{
        __id,
            images,
            price,
            name, 
            description,
            "slug": slug.current,
            "categoryName": category->name,
        }`;
    const data = await client.fetch(query);
    return data;
}

export default async function ProductPage({
    params,
}: {
    params: { slug: string };
}) {

    const data: fullProduct = await getData(params.slug);
    return (
        <div className=" bg-white">
            <div className=" mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="  grid gap-8 md:grid-cols-2">
                    <ImageGallery images={data.images} />

                    <div className=" md:py-8">
                        <div className=" mb2 md:mb-3">
                            <span className=" mb-0.5 inline-block text-gray-500">{data.categoryName}</span>
                            <h2 className=" text-2xl font-bold text-gray-800 lg:text-3xl">{data.name}</h2>
                        </div>

                        <div className=" mb-6 flex items-center gap-3 md:mb-10">
                            <Button className=" rounded-full gap-x-3" >
                                <span className=" text-sm">4.5 </span>
                                <StarIcon className=" h-5 w-5" />
                            </Button>
                            <span className=" text-sm text-gray-500 transition duration-150">76 Ratings</span>
                        </div>

                        <div className=" mb-4">
                            <div className=" flex items-end gap-2">
                                <span className=" text-xl font-bold text-gray-800 md:text-2xl" >Rs. {data.price}</span>
                                <span className=" mb-0.5 text-red-500 line-through">Rs. {data.price + 70}</span>
                            </div>

                            <span className=" text-sm text-gray-500">Incl, Vat plus shipping</span>
                        </div>

                        <div className=" mb-6 flex items-center gap-2 text-gray-500">
                            <Truck className=" w-6 h-6" />
                            <span className=" text-sm ">2-4 Day Shipping</span>
                        </div>

                        <div className=" flex gap-2.5">
                            <Button>Add To Bag</Button>
                            <Button className=" bg-red-700 hover:bg-red-500">Checkout Now</Button>
                        </div>

                        <div className=" mt-12 text-base text-gray-500 tracking-wide">{data.description}</div>

                    </div>


                </div>
            </div>
        </div>
    );

}
