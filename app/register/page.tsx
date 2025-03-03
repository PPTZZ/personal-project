import { NextPage } from "next";
import Image from "next/image";
import blob from "@/public/blob.svg";
import banana from "@/public/banana.png";
import strawberry from "@/public/strawberry-web.png";
import leafs from "@/public/leafs.png";
import leafsTab from "@/public/leafs-tab.png";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <Image
        src={blob}
        alt="blob"
        className=" hidden md:block md:absolute md:-bottom-48 md:-right-8 lg:-right-0 lg:bottom-0 lg:-w[38rem] lg:h-[51rem]"
      />
      <Image
        width={498}
        height={450}
        src={banana}
        alt="banana image"
        className="hidden md:block md:absolute md:-bottom-28 md:right-0 lg:-top-4"
      />
      <Image
        width={286}
        height={279}
        src={strawberry}
        alt="strawberry image"
        className="hidden md:block md:absolute md:bottom-48 md:right-10 lg:bottom-0 lg:right-32"
      />
      <Image
        width={530}
        height={531}
        src={leafsTab}
        alt="leafs image image"
        className="hidden md:block md:absolute md:-bottom-0 md:left-4 lg:hidden"
      />
      <Image
        width={746}
        height={846}
        src={leafs}
        alt="leafs image image"
        className="hidden lg:block lg:absolute lg:right-56 lg:top-0"
      />
    </div>
  );
};

export default Page;
