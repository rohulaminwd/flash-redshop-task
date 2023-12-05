"use client"


import { IconArrowLeft } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';


const BackBtn = ({ title }: any) => {
    const router = useRouter()
    const handleBackButtonClick = () => {
        router.back()
    };
    return (
        <button onClick={handleBackButtonClick} className='flex items-center'>
            <IconArrowLeft size={20} />
            <span className='px-2'>{title}</span>
        </button>
    );
};

export default BackBtn;