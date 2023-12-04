"use client"

import { bannerData } from "@/constants/bannerData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const Banner = () => {
    return (
        <div className="max-w-[1060px] mx-auto py-3">
            <Swiper
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },
                    868: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {
                    bannerData?.map((item, index) => (
                        <div key={index}>
                            <SwiperSlide className=''>
                                <div className='rounded-lg px-1.5  w-full'>
                                    <div className="overflow-hidden  rounded-lg">
                                        <Image src={item?.img} className="w-full hover:scale-[1.1] duration-300 rounded-lg" alt="banner img" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Banner;