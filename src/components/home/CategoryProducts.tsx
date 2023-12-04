import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TitleBar from '../ui/TitleBar';

const CategoryProducts = ({ products, category }: any) => {
    return (
        <div>
            <TitleBar item={products?.length} title={category} />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 gap-3'>
                {
                    products?.map((item: any, index: number) => (
                        <div key={index} className=''>
                            <Link href={item?.id} className='p-3'>
                                <div>
                                    <div className='w-full max-w-[300px]'>
                                        <Image src={item?.img} alt='img' />
                                    </div>
                                    <div className='my-2'>
                                        <h3>{item?.name}</h3>
                                        <span className='text-sm mr-2'>৳{item?.price}</span>
                                        <span className='line-through text-xs mr-2'>৳{item?.oldPrice}</span>
                                        <span className='text-red-500 text-sm '>%{((item?.oldPrice - item?.price) * 100 / item?.oldPrice).toFixed(2)} OFF</span>
                                    </div>
                                    <button className='btn btn-outline w-full hover:bg-purple-50 hover:text-gray-500'>Shop Now</button>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryProducts;