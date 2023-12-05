import ProductCart from "@/components/product/ProductCart";
import ProductDetails from "@/components/product/ProductDetails";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { ProductsData } from "@/constants/productsData";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";


const page = ({ params: { id } }: { params: { id: string } }) => {
    const product = ProductsData?.find(item => item?.id === id)
    const moreProducts = ProductsData?.filter(item => item?.category === product?.category)
    return (
        <div>
            <Navbar />
            <div className="w-full max-w-[1060px] mx-auto">
                <ProductDetails product={product} />
                <div className="mt-8">
                    <div className='flex w-full py-3 text-gray-600 items-center sticky top-16 bg-white justify-between'>
                        <div className='flex items-center'>
                            <h3 className='px-2 text-black font-bold uppercase'>More Form {product?.category}</h3>
                        </div>
                        <Link href={`category/${product?.category}`} className='flex items-center'>
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