import { simplifiedProduct } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import { client } from "../lib/sanity";

async function getData(category: string) {
    const query = `*[_type=='product' ]{      
            __id,
            "imgUrl": images[0].asset->url,
            price,
            name, 
            "slug": slug.current,
            "categoryName": category->name,
        }`;
    const data = await client.fetch(query);
    return data;
}

export default async function SeeAllProducts({ params, }:
    { params: { category: string }; }) {
    const data: simplifiedProduct[] = await getData(params.category);

    return (

        <div className=' bg-white'>
            <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className=" flex justify-between items-center">
                    <h2 className=' text-2xl font-bold tracking-tight text-gray-900 '>All Products</h2>
                </div>
                <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-4 xl:gap-x-8">
                    {data.map((product) => (
                        <div key={product._id} className=' group relative'>
                            <div className=" aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 ">
                                <Link href={`/product/${product.slug}`}>
                                    <Image
                                        src={product.imgUrl}
                                        alt='Product image'
                                        className=' w-full h-full object-cover object-center lg:h-full lg:w-full'
                                        width={300}
                                        height={300}
                                    />
                                </Link>

                            </div>
                            <div className=" mt-4 flex justify-between">
                                <h3 className=" text-sm text-gray-700 ">
                                    <Link href={`/product/${product.slug}`}>
                                        {product.name}
                                    </Link>
                                    <p className=' pt-1 text-sm font-medium text-gray-900'>Rs.
                                        {product.price}
                                    </p>
                                </h3>
                            </div>
                            <p className=' mt-1 text-sm text-gray-500'>
                                {product.categoryName}
                                {product.imageUrl}
                            </p>


                        </div>

                    ))}
                </div>
            </div>

        </div>
    )

}