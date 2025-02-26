import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import slim from "@/public/Slim.svg";
import mom from "@/public/Mom.svg";

const Navbar = () => {
  return (
    <div className="flex  items-center p-5 md:px-8 lg:px-20 space-x-4 border-b-2 border-neutral-200 md:border-none">
      <div className="flex-grow md:flex-grow-0 flex items-center space-x-3">
        <Image
          height={66}
          width={71}
          src={logo}
          alt="app logo"
          className="h-11 w-12 sm:h-16 md:w-20"
        />
        <div className=" hidden sm:flex space-x-[6px] md:px-5 md:h-8 md:border-r-2 border-neutral-200">
          <Image height={16} width={49} src={slim} alt="Slim"/>
          <Image height={16} width={49} src={mom} alt="Mom"/>
        </div>
      </div>
      <p className="font-bold text-xs leading-4 text-secondary cursor-pointer">LOG IN</p>
      <p className="font-bold text-xs leading-4 text-secondary cursor-pointer">REGISTER</p>
    </div>
  );
};
export default Navbar;
