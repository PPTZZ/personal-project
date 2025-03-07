"use client";
import React, { JSX } from "react";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import { TModalProps } from "../lib/definitions";
import { useRouter } from "next/navigation";
import { calorieCalculator } from "../lib/services";
import close from "@/public/close.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectLimitedBannedProducts } from "../lib/features/selectors";

const Modal: React.FC<TModalProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const bannedProducts = useSelector(selectLimitedBannedProducts);
  const showDialog = searchParams.get("showDialog");
  const height = searchParams.get("height");
  const age = searchParams.get("age");
  const currentWeight = searchParams.get("currentWeight");
  const desiredWeight = searchParams.get("desiredWeight");

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
    console.log(bannedProducts);
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    router.replace("/");
  };

  const recomandedCalories = calorieCalculator(
    height ? parseFloat(height) : 0,
    age ? parseFloat(age) : 0,
    currentWeight ? parseFloat(currentWeight) : 0,
    desiredWeight ? parseFloat(desiredWeight) : 0
  );

  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog
        ref={dialogRef}
        className="backdrop:bg-neutral-700/50 flex justify-center items-center shadow-xl"
      >
        <div className="relative flex flex-col items-center w-[42rem] h-[35.75rem] pt-16 ">
          <h2 className="font-bold text-2xl text-center mb-5 leading-[140%]">
            Your recommended daily
            <br />
            calorie intake is
          </h2>
          <p className="tracking-wider font-bold text-5xl">
            {recomandedCalories}
            <span className="text-xl"> kcal</span>
          </p>
          <div className="w-2/4 border-t-2 border-neutral-200 mt-8 pt-2">
            <p className="font-semibold">Foods you should not eat</p>
            <div className="mt-5">
              {bannedProducts?.length ? (
                bannedProducts.map((product, index) => (
                  <p key={index} className="text-neutral-200">
                    {index + 1}. {product.toString()}
                  </p>
                ))
              ) : (
                <p>No restricted foods found.</p>
              )}
            </div>
          </div>
          <button
            onClick={closeDialog}
            className="rounded-full bg-neutral-100 absolute top-8 right-8"
          >
            <Image src={close} alt="close btn" />
          </button>
          <button onClick={closeDialog} className="btn-calculator">
            Start loosing weight
          </button>
        </div>
      </dialog>
    ) : null;

  return dialog;
};

export default Modal;
