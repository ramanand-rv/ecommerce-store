import { simplifiedProduct } from "@/interface";
import { client } from "../lib/sanity";
import Link from "next/link";
import Image from "next/image";

async function getData(category: string) {
    const query = `*[_type=='product' && category->name==${category}]{      
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
export default async function CategoryPage({ params, }:
    { params: { category: string }; }) {
    const data: simplifiedProduct[] = await getData(params.category);
    return (
     
    )
}