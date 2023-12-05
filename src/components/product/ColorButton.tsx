import React from 'react';

const ColorButton = ({ product, setColor, color }: any) => {

    return (
        <div className='flex items-center gap-2'>
            {
                product?.colors?.map((item: any, index: number) => {
                    const isSelected = item.color === color?.color;
                    const dynamicClasses = `${isSelected ? "border-[3px] border-red-700" : ""} mt-1 w-10 h-10 rounded-full ${item.color}`;

                    return (
                        <div style={{ backgroundColor: item.color }} onClick={() => setColor(item)} key={index} className={`${dynamicClasses}`}>

                        </div>
                    );
                })
            }
        </div>
    );
};

export default ColorButton;