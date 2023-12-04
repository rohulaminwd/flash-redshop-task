"use client"
import { productCategories, ProductsData } from '@/constants/productsData';
import Link from 'next/link';
import { useState } from 'react';
import CategoryProducts from './CategoryProducts';



const HomeProducts = () => {
    const [category, setCategory] = useState<string>("IPHONE CASE")
    const iphoneCase = ProductsData?.filter(item => item?.category === "IPHONE CASE")

    return (
        <div className='border-t border-gray-300'>
            <div className='w-full max-w-[1060px] mx-auto flex '>
                <div className='py-2 w-[220px]'>
                    <div className='flex items-center'>
                        <h3 className='px-2'>Categories</h3>
                        <span className='text-white rounded-[4px] py-0.5 ml-1 px-1 bg-[#000]'>{productCategories?.length}</span>
                    </div>
                    <div className='mt-4'>
                        {
                            productCategories?.map((item: any, index: number) => (
                                <div key={index} className=''>
                                    <Link href={item?.id} onClick={() => setCategory(item?.category)} className='cursor-pointer'>
                                        <h3 className={`${category === item?.category ? "bg-blue-50 border-r-[4px] font-bold border-blue-400" : ""} py-1.5 my-1.5 px-2 text-[14px]`}>{item?.category}</h3>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='border-l w-full border-gray-300'>
                    <CategoryProducts products={iphoneCase} category={"IPHONE CASE"} />
                    <CategoryProducts products={iphoneCase} category={"IPHONE CASE"} />
                    <CategoryProducts products={iphoneCase} category={"IPHONE CASE"} />
                    <CategoryProducts products={iphoneCase} category={"IPHONE CASE"} />
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;