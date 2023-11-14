import Image from 'next/image';
import Link from 'next/link';
import { client, urlFor } from '../lib/sanity';

async function getData() {
  const query = "*[_type=='heroImage'][0]";
  const data = await client.fetch(query);
  return data;
}

const Hero = async () => {
const data = await getData();
  return (
    <section className=' mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 '>
      <div className=" mb-8 flex flex-wrap justify-between md:mb-16">
        <div className=" mb-6 flex flex-col w-full justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className=' mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl '>
            <span className=' text-blue-700'>Top Fashion</span> for a <span className=' text-red-600'>Cheap price</span>
          </h1>
          <p className=' max-w-lg leading-relaxed text-gray-600 font-semibold'>
            Look your best, feel your best, and Shop the latest fashion trends at
            <span className=' text-red-600 font-bold'> NOT </span> <span className=' font-bold text-blue-700'>CHOR BAZAAR</span>, your one-stop shop for all <span className=' text-blue-600 font-bold'>रस्ते का माल </span><span className=' text-red-600'>सस्ते में </span>

            {/* From clothes to accessories and home decor, we have everything you need to create a look that's all your own. */}
          </p>
        </div>
        <div className=" flex mb-12 w-full md:mb-16 lg:w-2/3 ">
          <div className=" relative rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0 top-12 left-12 z-10 -ml-12 overflow-hidden">
            <Image 
            src={urlFor(data.image1).url()}
            alt='Product image'
            className=' object-cover object-center w-full h-full '
            width={500}
            height={500}
            priority
            />
          </div>

          <div className=" rounded-lg bg-gray-100 shadow-lg overflow-hidden">
            <Image 
            src={urlFor(data.image2).url()}
            alt='Another product image'
              className=' h-full w-full object-cover object-center'
            width={500}
            height={500}
            priority
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center gap-8 md:flex-row">
        <div className=" flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link href="/Men"
          className=' flex w-1/3 items-center justify-center text-gray-500 transition duration-150 hover:bg-gray-100 active:bg-gray-200'>
            Men
          </Link>

          <Link href="/Women"
            className=' flex w-1/3 items-center justify-center text-gray-500 transition duration-150 hover:bg-gray-100 active:bg-gray-200'>
            Women
          </Link>

          <Link href="/Teens"
            className=' flex w-1/3 items-center justify-center text-gray-500 transition duration-150 hover:bg-gray-100 active:bg-gray-200'>
            Teens
          </Link>


        </div>
      </div>
    </section>

  )
}

export default Hero
