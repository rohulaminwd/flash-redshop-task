"use client"

import BackBtn from '@/components/ui/BackBtn';
import Navbar from '@/components/ui/Navbar';
import Lottie from "lottie-react";
import notFound from "../../assets/lottie/nobag.json"
import { IoBagHandleOutline } from 'react-icons/io5';

const page = () => {
    return (
        <div className=''>
            <div className="hidden lg:block">
                <Navbar />
            </div>
            <div className="bg-white border-b text-black lg:hidden px-5 sticky top-0 py-3 flex items-center justify-between">
                <BackBtn title={"Cart"} />
                <span>
                    <IoBagHandleOutline size={20} />
                </span>
            </div>
            <div className='w-full max-w-[1060px] mx-auto'>
                <div className="max-w-[300px] mx-auto mt-10">
                    <Lottie
                        animationData={notFound}
                        loop={true}
                        style={{ height: "100%" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default page;