"use client";
import { NextPage } from "next";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from "./ui/modal";
import Image from "next/image";
import blob from "@/public/blob.svg";
import banana from "@/public/banana.png";
import strawberry from "@/public/strawberry-web.png";
import leafs from "@/public/leafs.png";
import leafsTab from "@/public/leafs-tab.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./lib/store"; // Adjust the path to your store file
import { getProducts } from "./lib/services";


const Home: NextPage = ({}) => {
  const searchParams = useSearchParams();
  // const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const bloodType = Number(searchParams.get('bloodType'))

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    param: string
  ) => {
    const url = new URL(window.location.href);
    if (e.target.value) {
      url.searchParams.set(param, e.target.value);
    } else {
      url.searchParams.delete(param);
    }
    router.push(url.toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    (e.currentTarget as HTMLFormElement).reset();
    const url = new URL(window.location.href);
    url.searchParams.set("showDialog", "y");
    router.push(url.toString());
    getProducts(bloodType)
  };

  // Remember to import react-hot-toast
  return (
    <>
      <Modal />
      <div className="flex flex-col h-fit sm:w-4/5 md:w-[38rem] px-5 sm:px-8 md:px-4">
        <h1 className="font-bold text-lg mt-8 sm:text-4xl sm:mt-24 ">
          Calculate your daily calorie intake right now
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-transparent grid grid-cols-1 sm:grid-cols-2 sm:place-items-start mt-8 z-10"
        >
          <div className="flex flex-col gap-8">
            <input
              type="number"
              name="height"
              onChange={(e) => handleChange(e, "height")}
              placeholder="Enter your height *"
              value={searchParams.get("height") || ""}
              required
              className="w-full border-b-2 text-secondary font-semibold focus-visible:outline-none sm:py-5"
            />
            <input
              type="number"
              name="age"
              onChange={(e) => handleChange(e, "age")}
              placeholder="Enter your age *"
              value={searchParams.get("age") || ""}
              required
              className="w-full border-b-2 text-secondary font-semibold focus-visible:outline-none  sm:py-5"
            />
            <input
              type="number"
              name="currentWeight"
              onChange={(e) => handleChange(e, "currentWeight")}
              placeholder="Enter your weight *"
              value={searchParams.get("currentWeight") || ""}
              required
              className="w-full border-b-2 text-secondary font-semibold focus-visible:outline-none sm:py-5"
            />
          </div>
          <div className="mt-8 flex flex-col gap-1 sm:m-0">
            <input
              type="number"
              name="desiredWeight"
              onChange={(e) => handleChange(e, "desiredWeight")}
              placeholder="Enter your goal weight *"
              value={searchParams.get("desiredWeight") || ""}
              required
              className="w-full border-b-2 text-secondary font-semibold focus-visible:outline-none sm:py-5"
            />
            <div>
              <p className="w-full mt-8 text-secondary font-semibold sm:border-b-2  sm:py-5 sm:mt-[28px]">
                Blood type *
              </p>
              <div className="flex justify-around w-full items-center gap-1 sm:mt-5">
                {[1, 2, 3, 4].map((num) => (
                  <label
                    key={num}
                    className="flex justify-center space-x-1 items-center cursor-pointer transition-all"
                  >
                    <input
                      type="radio"
                      name="bloodType"
                      id={`bld${num}`}
                      value={num}
                      onChange={(e) => handleChange(e, "bloodType")}
                      className="hidden peer "
                      required
                    />
                    <span className="size-5 border-2 border-gray-500 rounded-full flex items-center justify-center peer-checked:border-primary peer-checked:bg-primary peer-checked:ring-inset peer-checked:ring-2 peer-checked:ring-white transition-all"></span>
                    <span className="text-gray-800 peer-checked:text-primary">
                      {num}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <button className="btn-calculator" type="submit">
            Start losing weight
          </button>
        </form>
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
    </>
  );
};

export default Home;
