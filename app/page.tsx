"use client";
import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import blob from "@/public/blob.svg";
import banana from "@/public/banana.png";
import Button from "./ui/navigation/button";

const Home: NextPage = ({}) => {
  const [formData, setFormData] = useState({
    height: "",
    age: "",
    currentWeight: "",
    desiredWeight: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className="flex flex-col px-5 sm:px-8  sm:w-4/5">
      <h1 className="font-bold text-lg mt-8 sm:text-4xl sm:mt-24">
        Calculate your daily calorie intake right now
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white grid grid-cols-1 sm:grid-cols-2 sm:place-items-start mt-8"
      >
        <div className="flex flex-col gap-8">
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Enter your height *"
            required
            className="w-full border-b-2 text-secondary font-semibold focus-visible:outline-none sm:py-5"
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age *"
            required
            className="w-full border-b-2 text-secondary font-semibold focus-visible:outline-none  sm:py-5"
          />
          <input
            type="number"
            name="currentWeight"
            value={formData.currentWeight}
            onChange={handleChange}
            placeholder="Enter your weight *"
            required
            className="w-full border-b-2 text-secondary font-semibold focus-visible:outline-none sm:py-5"
          />
        </div>
        <div className="mt-8 flex flex-col gap-1 sm:m-0">
          <input
            type="number"
            name="desiredWeight"
            value={formData.desiredWeight}
            onChange={handleChange}
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
                  <span className="size-5 border-2 border-gray-500 rounded-full flex items-center justify-center peer-checked:bg-primary peer-checked:ring-inset peer-checked:ring-2 peer-checked:ring-white transition-all"></span>
                  <span className="text-gray-800 peer-checked:text-primary">
                    {num}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <Button />
      </form>
      <Image
        width={553}
        height={750}
        src={blob}
        alt="blob"
        className=" hidden sm:block sm:absolute sm:-bottom-48 sm:-right-8 sm:-z-20"
      />
      <Image
        width={498}
        height={450}
        src={banana}
        alt="banana image"
        className="hidden sm:block sm:absolute sm:-bottom-28 sm:right-0 sm:-z-10"
      />
    </div>
  );
};

export default Home;
