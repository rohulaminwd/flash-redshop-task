import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

const TitleBar = ({ item, title }: any) => {
    return (
        <div className='flex w-full py-3 text-gray-600 items-center sticky top-16 bg-white justify-between'>
            <div className='flex items-center'>
                <h3 className='px-2'>{title}</h3>
                <span className='text-white rounded-[4px] py-0.5 px-1 ml-1 bg-[#000]'>{item}</span>
            </div>
            <Link href={title} className='flex items-center'>
                <span className='px-3'>See All</span>
                <IconChevronRight />
            </Link>
        </div>
    );
};

export default TitleBar;