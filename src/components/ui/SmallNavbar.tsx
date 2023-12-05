import { menuItem } from '@/constants/menuItem';
import Link from 'next/link';
import React from 'react';

const SmallNavbar = () => {
    return (
        <div className='py-2 px-4 lg:hidden flex items-center justify-between bg-white sticky bottom-0'>
            {
                menuItem?.map((item: any, index: number) => (
                    <div key={index}>
                        <Link href={item?.path} className='font-boldtext-center'>
                            <p className='text-center flex justify-center mx-auto text-black'>{item?.icon}</p>
                            <h4 className='text-xs mt-0 text-center'>{item?.name}</h4>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default SmallNavbar;