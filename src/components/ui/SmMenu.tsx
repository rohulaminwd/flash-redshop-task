

import { menu } from '@/constants/menuItem';
import { IconX } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';
const SmMenu = ({ toggle, setToggle }: any) => {
    return (
        <div className={`${toggle ? "block" : "hidden"} w-full h-screen px-4 bg-white z-[1000000] absolute top-0 left-0`}>
            <div className='w-full py-3 border-b flex items-center justify-between text-xl font-bold text-black'>
                <h3 className='w-full'>Menu</h3>
                <button onClick={() => setToggle(false)}><IconX size={24} /></button>
            </div>
            <div>
                {
                    menu?.map((item: any, index: number) => (
                        <div key={index}>
                            <Link href={item?.path} onClick={() => setToggle(false)} className='w-full'>
                                <p className='my-2'>{item?.name}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SmMenu;