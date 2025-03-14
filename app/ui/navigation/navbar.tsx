import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import slim from "@/public/Slim.svg";
import mom from "@/public/Mom.svg";
import menu from "@/public/menu.svg";
import { getSession, logoutUser } from "@/app/actions/actions";

const Navbar = async () => {
  const session = await getSession();
  return (
    <div className="flex bg-transparent  items-center space-x-4 border-b-2 border-neutral-200 lg:border-none px-5 sm:px-8 md:px-4 pb-4">
      <div className="flex-grow lg:flex-grow-0 flex items-center space-x-3 ">
        <Image
          height={66}
          width={71}
          src={logo}
          alt="app logo"
          className="h-11 w-12 sm:h-16 md:w-20"
        />
        <div className=" hidden sm:flex space-x-[6px] md:px-5 md:h-8 lg:border-r-2 border-neutral-200 lg:relative lg:top-5  lg:-left-12">
          <Image height={16} width={49} src={slim} alt="Slim" />
          <Image height={16} width={49} src={mom} alt="Mom" />
        </div>
      </div>
      {session.isLoggedIn === false ? (
        <>
          <Link href={"/login"}>
            <p
              className={`font-bold text-xs leading-4 text-secondary cursor-pointer lg:relative lg:top-5  lg:-left-12`}
            >
              LOG IN
            </p>
          </Link>
          <Link href={"/register"}>
            <p className="font-bold text-xs leading-4 text-secondary cursor-pointer lg:relative lg:top-5  lg:-left-12">
              REGISTRATION
            </p>
          </Link>
        </>
      ) : (
        <>
          <Link href={"/user/diary"}>
            <p
              className={`font-bold text-xs leading-4 text-secondary cursor-pointer lg:relative lg:top-5  lg:-left-12 hidden lg:block`}
            >
              DIARY
            </p>
          </Link>
          <Link href={"/user/calculator"}>
            <p className="font-bold text-xs leading-4 text-secondary cursor-pointer lg:relative lg:top-5  lg:-left-12 hidden lg:block">
              CALCULATOR
            </p>
          </Link>
          <div className="flex absolute items-center right-20 lg:right-56 gap-5">
            <p className="font-bold text-xs leading-4 text-textColor lg:relative lg:top-5 lg:right-12 ">
              {session.userName}
            </p>
            <p
              onClick={logoutUser}
              className="font-bold text-xs leading-4 text-secondary cursor-pointer lg:relative lg:top-5 lg:right-12 border-l-2 pl-5 border-neutral-200"
            >
              Exit
            </p>
            <Image src={menu} alt="menu icon" className="lg:hidden" />
          </div>
        </>
      )}
    </div>
  );
};
export default Navbar;
