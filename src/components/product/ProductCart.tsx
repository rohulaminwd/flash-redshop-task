import Image from "next/image";
import Link from "next/link";


const ProductCart = ({ products }: any) => {
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-5'>
                {
                    products?.map((item: any, index: number) => (
                        <div key={index} className=''>
                            <Link href={`/product-details/${item?.id}`} className='p-3'>
                                <div>
                                    <div className='w-full overflow-hidden max-w-[300px]'>
                                        <Image src={item?.img} className='hover:scale-[1.1] duration-300' alt='img' />
                                    </div>
                                    <div className='my-2'>
                                        <h3>{item?.name}</h3>
                                        <span className='text-sm mr-2'>৳{item?.price}</span>
                                        <span className='line-through text-xs mr-2'>৳{item?.oldPrice}</span>
                                        <span className='text-red-500 text-sm '>%{((item?.oldPrice - item?.price) * 100 / item?.oldPrice).toFixed(2)} OFF</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductCart;