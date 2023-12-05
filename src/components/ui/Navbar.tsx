import Image from "next/image";
import flash from "@/assets/image/FLASH.png"
import Link from "next/link";
import { IconCategory, IconSearch } from "@tabler/icons-react"
import { IoBagHandleOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <div className="border-b bg-white z-50 sticky top-0 border-gray-300 py-3">
            <div className="max-w-[1060px] mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <Image src={flash} width={100} alt="logo" />
                        </Link>
                    </div>
                    <div className="w-full">
                        <div className="border border-gray-300 flex gap-x-3 items-center text-gray-500 rounded-md px-3 py-2 bg-gray-50 max-w-[380px] mx-auto w-full">
                            <span><IconSearch size={20} /></span>
                            <input type="search" placeholder="Search Product Here." className="w-full g-gray-50 border-0 outline-none" />
                        </div>
                    </div>
                    <ul className="flex items-center gap-x-6">
                        <Link href="#" className="flex items-center gap-x-2">
                            <IconCategory size={24} />
                            <span>Categories</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-x-2">
                            <IoBagHandleOutline size={24} />
                            <span>Bag</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;