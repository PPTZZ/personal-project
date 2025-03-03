import React from "react";
import { ButtonProps } from "@/app/lib/definitions";

const Button: React.FC<ButtonProps> = ({ text ,variant }) => {
  return (
    <button className="justify-self-center md:justify-self-start mt-10 w-52 h-11 py-3 px-6 font-bold text-sm shadow-xl flex justify-center items-center rounded-full">
      {text}
    </button>
  );
};

export default Button
