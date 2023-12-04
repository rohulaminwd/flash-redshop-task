import Image from "next/image";
import flash from "@/assets/image/FLASH.png"
import sass from "@/assets/image/sass.png"
import Link from "next/link";

const Footer = () => {
    return (
        <div className="mx-auto w-full border-t border-gray-300 py-3">
            <div className="w-[100px] mx-auto">
                <Image src={flash} width={100} alt="logo" />
            </div>
            <p className="text-center mt-8 text-sm w-full">
                <Link className="mx-2" href="/">Terms and condition</Link>
                <Link className="mx-2" href="/">Refund Policy</Link>
                <Link className="mx-2" href="/">Privacy Policy</Link>
            </p>
            <Link className="flex w-full mt-20 justify-center text-xs items-center text-center" href="/">
                <Image src={sass} width={20} alt="logo" />
                <span>web run of redshop</span>
            </Link>
        </div>
    );
};

export default Footer;