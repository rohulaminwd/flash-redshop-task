"use client"
import { productCategories, ProductsData } from '@/constants/productsData';
import Link from 'next/link';
import { useState } from 'react';
import CategoryProducts from './CategoryProducts';



const HomeProducts = () => {
    const [category, setCategory] = useState<string>("IPHONE CASE")
    const iphoneCase = ProductsData?.filter(item => item?.category === "IPHONE CASE")
    const airpods = ProductsData?.filter(item => item?.category === "AIRPODS PRO CASE")
    const lighting = ProductsData?.filter(item => item?.category === "LIGHTNING CABLE")
    const power = ProductsData?.filter(item => item?.category === "POWER BANK")

    return (
        <div className='border-t border-gray-300'>
            <div className='w-full max-w-[1060px] mx-auto flex'>
                <div className='py-2 w-[230px] text-gray-700 lg:block hidden !sticky top-16'>
                    <div className='sticky top-20'>
                        <div className='flex items-center'>
                            <h3 className='px-2'>Categories</h3>
                            <span className='text-white rounded-[4px] py-0.5 ml-1 px-1 bg-[#000]'>{productCategories?.length}</span>
                        </div>
                        <div className='mt-4 '>
                            {
                                productCategories?.map((item: any, index: number) => (
                                    <div key={index} className=''>
                                        <Link href={item?.id} onClick={() => setCategory(item?.category)} className='cursor-pointer'>
                                            <h3 className={`${category === item?.category ? "bg-blue-50 border-r-[4px] font-bold border-blue-400" : ""} py-1.5 my-1 px-2 text-[14px]`}>{item?.category}</h3>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='lg:border-l w-full border-gray-300'>
                    <CategoryProducts products={iphoneCase} category={"IPHONE CASE"} id={"iphone"} />
                    <CategoryProducts products={airpods} category={"AIRPODS PRO CASE"} id={"airpods"} />
                    <CategoryProducts products={lighting} category={"LIGHTNING CABLE"} id={"lighting"} />
                    <CategoryProducts products={power} category={"POWER BANK"} id={"power"} />
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;