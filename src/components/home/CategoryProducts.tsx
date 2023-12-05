import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TitleBar from '../ui/TitleBar';

const CategoryProducts = ({ products, category, id }: any) => {
    return (
        <div id={id} >
            <TitleBar item={products?.length} title={category} />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-5'>
                {
                    products?.map((item: any, index: number) => (
                        <div key={index} className=''>
                            <Link href={`product-details/${item?.id}`} className='p-3'>
                                <div>
                                    <div className='w-full overflow-hidden max-w-[300px]'>
                                        <Image src={item?.img} className='hover:scale-[1.1] duration-300' alt='img' />
                                    </div>
                                    <div className='my-2'>
                                        <h3>{item?.name?.slice(0, 17)}</h3>
                                        <span className='text-sm mr-2'>৳{item?.price}</span>
                                        <span className='line-through text-xs mr-2'>৳{item?.oldPrice}</span>
                                        <span className='text-red-500 text-sm '>%{((item?.oldPrice - item?.price) * 100 / item?.oldPrice).toFixed(2)} OFF</span>
                                    </div>
                                    <button className='border rounded-md py-1.5 duration-300 border-gray-700 w-full hover:bg-purple-100 hover:text-gray-700'>Shop Now</button>
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