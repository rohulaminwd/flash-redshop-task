import ProductCart from '@/components/product/ProductCart';
import Navbar from '@/components/ui/Navbar';
import SearchBar from '@/components/ui/SearchBar';
import SmallNavbar from '@/components/ui/SmallNavbar';
import { ProductsData } from '@/constants/productsData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    const iphoneCase = ProductsData?.filter(item => item?.category === "IPHONE CASE")
    const airpods = ProductsData?.filter(item => item?.category === "AIRPODS PRO CASE")
    const lighting = ProductsData?.filter(item => item?.category === "LIGHTNING CABLE")
    const power = ProductsData?.filter(item => item?.category === "POWER BANK")

    console.log(iphoneCase, "okk")
    return (
        <div className='relative '>
            <Navbar />
            <div className="bg-white z-50 lg:hidden sticky top-0 pt-5 py-2 px-4">
                <SearchBar />
            </div>
            <div className='w-full h-screen my-8 max-w-[1060px] mx-auto'>
                <div className='grid items-center justify-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                    <div className='w-[140px] md:w-[150px]'>
                        <Link href={`/categorys/${iphoneCase[0]?.category}`}>
                            <div className='w-[140px] md:w-[150px] h-[140px] md:h-[150px] border'>
                                <Image src={iphoneCase[0]?.img} width={150} alt='img' />
                            </div>
                            <h3 className='mt-1 text-center text-black'>{iphoneCase[0]?.category?.slice(0, 17)}</h3>
                        </Link>
                    </div>
                    <div className='w-[140px] md:w-[150px]'>
                        <Link href={`/categorys/${airpods[0]?.category}`}>
                            <div className='w-[140px] md:w-[150px] h-[140px] md:h-[150px] border'>
                                <Image src={airpods[0]?.img} width={150} alt='img' />
                            </div>
                            <h3 className='mt-1 text-center text-black'>{airpods[0]?.category?.slice(0, 17)}</h3>
                        </Link>
                    </div>
                    <div className='w-[140px] md:w-[150px]'>
                        <Link href={`/categorys/${lighting[0]?.category}`}>
                            <div className='w-[140px] md:w-[150px] h-[140px] md:h-[150px] border'>
                                <Image src={lighting[0]?.img} width={150} alt='img' />
                            </div>
                            <h3 className='mt-1 text-center text-black'>{lighting[0]?.category?.slice(0, 17)}</h3>
                        </Link>
                    </div>
                    <div className='w-[140px] md:w-[150px]'>
                        <Link href={`/categorys/${power[0]?.category}`}>
                            <div className='w-[140px] md:w-[150px] h-[140px] md:h-[150px] border'>
                                <Image src={power[0]?.img} width={150} alt='img' />
                            </div>
                            <h3 className='mt-1 text-center text-black'>{power[0]?.category?.slice(0, 17)}</h3>
                        </Link>
                    </div>

                </div>
            </div>
            <SmallNavbar />
        </div>
    );
};

export default page;