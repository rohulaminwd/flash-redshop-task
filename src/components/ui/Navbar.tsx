"use client"

import Image from "next/image";
import flash from "@/assets/image/FLASH.png"
import Link from "next/link";
import { IconCategory, IconMenu2, IconSearch } from "@tabler/icons-react"
import { IoBagHandleOutline } from "react-icons/io5";
import SearchBar from "./SearchBar";
import { useState } from "react";
import SmMenu from "./SmMenu";


const Navbar = () => {
    const [toggle, setToggle] = useState<boolean>(false)
    return (
        <div className="border-b bg-white z-50 lg:sticky top-0 border-gray-300 py-3">
            <div className="max-w-[1060px] px-5 lg:px-0 mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <Image src={flash} width={100} alt="logo" />
                        </Link>
                    </div>
                    <div className="w-full hidden lg:block">
                        <SearchBar />
                    </div>
                    <ul className="lg:flex hidden items-center gap-x-6">
                        <Link href="#" className="flex items-center gap-x-2">
                            <IconCategory size={24} />
                            <span>Categories</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-x-2">
                            <IoBagHandleOutline size={24} />
                            <span>Bag</span>
                        </Link>
                    </ul>
                    <button onClick={() => setToggle(true)} className="cursor-pointer lg:hidden border-0 outline-none text-black">
                        <IconMenu2 size={24} />
                    </button>
                </div>
            </div>
            <SmMenu toggle={toggle} setToggle={setToggle} />
        </div>
    );
};

export default Navbar;