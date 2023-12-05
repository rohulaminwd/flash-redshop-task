"use client"

import Lottie from 'lottie-react';
import readingQuran from "../../assets/lottie/loading (1).json"

const LoadingSecondary = () => {
    return (
        <div className='h-screen w-full bg-[#fff] flex justify-center items-center'>
            <div className="w-[200px]  sm:w-[400px]">
                <Lottie
                    animationData={readingQuran}
                    loop={true}
                    style={{ height: "100%" }}
                />
            </div>
        </div>
    );
};

export default LoadingSecondary;