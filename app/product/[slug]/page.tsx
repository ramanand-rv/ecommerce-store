import ImageGallery from "@/app/components/ImageGallery";
import { client } from "@/app/lib/sanity";
import { fullProduct } from "@/interface";

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
                </div>
            </div>
        </div>
    );

}
