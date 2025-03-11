import { NextPage } from "next";
import Modal from "@/app/ui/modal";
import Image from "next/image";
import leafs from "@/public/leafs.png";
import leafsTab from "@/public/leafs-tab.png";
import { getSession } from "@/app/actions/actions";
import { redirect } from "next/navigation";

const UserCalculator: NextPage = async ({}) => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/");
  }
  // Remember to import react-hot-toast
  return (
    <>
      <Modal />
      <div className="flex flex-col lg:flex-row ">
        <div className="flex flex-col h-fit px-5 sm:px-8 md:px-4 md:w-3/5">
          <h1 className="font-bold text-lg mt-8 sm:text-4xl sm:mt-24 ">
            Calculate your daily calorie intake right now
          </h1>
          <form className="bg-transparent grid grid-cols-1 sm:gap-7 sm:grid-cols-2 sm:place-items-start mt-8 z-10">
            <div className="flex flex-col gap-8">
              <input
                type="number"
                name="height"
                placeholder="Enter your height *"
                required
                className="w-full border-b-2 text-secondary font-semibold focus-visible:outline-none sm:py-5"
              />
              <input
                type="number"
                name="age"
                placeholder="Enter your age *"
                required
                className="w-full border-b-2 text-secondary font-semibold focus-visible:outline-none  sm:py-5"
              />
              <input
                type="number"
                name="currentWeight"
                placeholder="Enter your weight *"
                required
                className="w-full border-b-2 text-secondary font-semibold focus-visible:outline-none sm:py-5"
              />
            </div>
            <div className="mt-8 flex flex-col gap-1 sm:m-0">
              <input
                type="number"
                name="desiredWeight"
                placeholder="Enter your goal weight *"
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
            width={530}
            height={531}
            src={leafsTab}
            alt="leafs image image"
            className="hidden md:block md:absolute md:-bottom-64 md:-right-48 lg:hidden"
          />
          <Image
            width={746}
            height={846}
            src={leafs}
            alt="leafs image image"
            className="hidden lg:block lg:absolute lg:-right-80 lg:top-56 rotate-45"
          />
        </div>
        <div className="lg:w-2/5 flex sm:px-8 lg:flex-col gap-20 py-20 lg:items-baseline mt-24">
          <div className="lg:ml-32 w-2/5 lg:w-full">
            <p className="font-bold text-textColor">Summary for date</p>
            <p className="w-full text-secondary font-semibold sm:py-2">Left</p>
            <p className="w-full text-secondary font-semibold sm:py-2">
              consumed
            </p>
            <p className="w-full text-secondary font-semibold sm:py-2">
              daily rate
            </p>
            <p className="w-full text-secondary font-semibold sm:py-2">
              n% of normal
            </p>
          </div>
          <div className=" w-2/5 lg:mt-10">
            <p className="font-bold text-textColor">Food not recomended</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCalculator;
