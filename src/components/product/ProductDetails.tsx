"use client"

import { IconPlus } from '@tabler/icons-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';

const ProductDetails = ({ product }: any) => {
    const [img, setImg] = useState<any>(product?.img)
    const [color, setColor] = useState<any>(product?.colors[0])
    const [open, setOpen] = useState<any>(false)

    return (
        <div className='lg:flex gap-x-3 p-2 md:p-3 lg:p-4'>
            <div className='flex lg:flex-row flex-col-reverse gap-2 lg:gap-3 w-full justify-center'>
                <div className='flex gap-x-2 lg:block w-full lg:w-auto'>
                    {
                        product?.othersImg?.map((item: any, index: number) => (
                            <div onClick={() => setImg(item?.img)} className='w-[80px] cursor-pointer border lg:mb-2' key={index}>
                                <Image src={item?.img} width={80} alt='Product img' />
                            </div>
                        ))
                    }
                </div>
                <div className='w-full'>
                    <Image src={img} width={500} alt='Product img' />
                </div>
            </div>
            <div className='w-full'>
                <div className='lg:mx-2 mt-8 lg:mt-0 w-full'>
                    <h3 className='lg:text-xl mb-2 lg:mb-3 text-black'>{product?.name}</h3>
                    <span className='lg:text-2xl text-black mr-2'>৳{product?.price}</span>
                    <span className='line-through lg:text-xl mr-2'>৳{product?.oldPrice}</span>
                    <span className='text-green-500 text:xl lg:text-2xl font-bold'>%{((product?.oldPrice - product?.price) * 100 / product?.oldPrice).toFixed(2)} OFF</span>
                    <p className='mt-2 text-sm text-gray-500'>inclusive of all taxes</p>
                    <h3 className='my-3 lg:my-4'>TSX : {color?.quantity}</h3>

                    <h5 className='text-black uppercase'>Select Color <span className='text-red-500'>*</span></h5>
                    <div className='flex items-center gap-3'>
                        {
                            product?.colors?.map((item: any, index: number) => (
                                <div onClick={() => setColor(item)} key={index} className={`${item?.color === color?.color ? "border-[3px] border-red-700" : ""} mt-1 w-10 h-10 rounded-full bg-black ${item?.color}`}></div>
                            ))
                        }
                    </div>
                    <div className='w-full mt-5 grid grid-cols-2 items-center gap-x-2'>
                        <button className='flex bg-black hover:bg-black text-white items-center gap-x-2 w-full btn'>
                            <IoBagHandleOutline size={20} />
                            <span className='uppercase'>Add to Bag</span>
                        </button>
                        <button className='flex border text-black hover:bg-transparent hover:text-black items-center gap-x-2 w-full btn btn-outline'>
                            <IoBagHandleOutline size={20} />
                            <span className='uppercase'>Add to Bag</span>
                        </button>
                    </div>
                    <div className='border-y py-2 mt-4'>
                        <div onClick={() => setOpen(!open)} className='flex cursor-pointer items-center font-bold text-black justify-between'>
                            <h5>PRODUCT DESCRIPTION</h5> <span><IconPlus size={20} /></span>
                        </div>
                        <div className={`${!open ? "hidden" : ""} mt-3`}>
                            <p className='text-black font-bold'>This product is compatible with: <span className='text-gray-500 !capitalize font-normal'>{product?.name}</span></p>
                            <p className='text-black font-bold'>This product is NOT compatible with: <span className='text-gray-500 font-normal'>{product?.name}</span></p>
                            <p className='text-black font-bold'>Product Materials: <span className='text-gray-500 font-normal'>{product?.name}</span></p>
                            <p className='text-black font-bold'>Product Dimensions: <span className='text-gray-500 font-normal'>{product?.name}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;