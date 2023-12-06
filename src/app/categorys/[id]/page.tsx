import ProductCart from '@/components/product/ProductCart';
import Navbar from '@/components/ui/Navbar';
import SearchBar from '@/components/ui/SearchBar';
import SmallNavbar from '@/components/ui/SmallNavbar';
import { ProductsData } from '@/constants/productsData';
import { Iproduct } from '@/types';
import React from 'react';

const page = ({ params: { id } }: { params: { id: string } }) => {
    const category = id.replace(/%20/g, ' ');
    const moreProducts: Iproduct[] = ProductsData?.filter(item => item?.category === category)
    return (
        <div className='relative'>
            <Navbar />
            <div className="bg-white z-50 lg:hidden sticky top-0 pt-5 py-2 px-4">
                <SearchBar />
            </div>
            <div className='w-full max-w-[1060px] mx-auto'>
                <ProductCart products={moreProducts} />
            </div>
            <SmallNavbar />
        </div>
    );
};

export default page;