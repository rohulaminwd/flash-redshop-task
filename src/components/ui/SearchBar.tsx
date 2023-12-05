import { IconSearch } from '@tabler/icons-react';
import React from 'react';

const SearchBar = () => {
    return (
        <div className="border sticky top-0 border-gray-300 flex gap-x-3 items-center text-gray-500 rounded-md px-3 py-2 bg-gray-50 lg:max-w-[380px] mx-auto w-full">
            <span><IconSearch size={20} /></span>
            <input type="search" placeholder="Search Product Here." className="w-full g-gray-50 border-0 outline-none" />
        </div>
    );
};

export default SearchBar;