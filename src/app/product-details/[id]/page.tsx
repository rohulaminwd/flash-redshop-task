

import ProductCart from "@/components/product/ProductCart";
import ProductDetails from "@/components/product/ProductDetails";
import BackBtn from "@/components/ui/BackBtn";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { ProductsData } from "@/constants/productsData";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { IoBagHandleOutline } from "react-icons/io5";


const page = ({ params: { id } }: { params: { id: string } }) => {
    const product = ProductsData?.find(item => item?.id === id)
    const moreProducts = ProductsData?.filter(item => item?.category === product?.category)

    return (
        <div>
            <div className="hidden lg:block">
                <Navbar />
            </div>
            <div className="bg-white border-b text-black lg:hidden px-5 sticky top-0 py-3 flex items-center justify-between">
                <BackBtn title={product?.name} />
                <span>
                    <IoBagHandleOutline size={20} />
                </span>
            </div>
            <div className="w-full max-w-[1060px] mx-auto">
                <ProductDetails product={product} />
                <div className="mt-8">
                    <div className='flex w-full py-3 text-gray-600 items-center bg-white justify-between'>
                        <div className='flex items-center'>
                            <h3 className='px-2 text-black font-bold uppercase'>More Form {product?.category}</h3>
                        </div>
                        <Link href={`/categorys/${product?.category}`} className='flex items-center'>
                            <span className='px-2'>See All</span>
                            <IconChevronRight size={20} />
                        </Link>
                    </div>
                    <ProductCart products={moreProducts} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;