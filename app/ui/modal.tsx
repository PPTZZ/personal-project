"use client";
import React, { JSX } from "react";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import { TModalProps } from "../lib/definitions";
import { useRouter } from "next/navigation";
import { calorieCalculator } from "../lib/services";

const Modal: React.FC<TModalProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
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
      <dialog ref={dialogRef} className="backdrop:bg-neutral-700/50 flex justify-center items-center">
        <div className="relative flex flex-col items-center w-[42rem] h-[35.75rem] pt-16 ">
          <h2 className="font-bold text-2xl text-center mb-5 leading-[140%]"> Your recommended daily<br/>calorie intake is</h2>
          <p className="tracking-wider font-bold text-5xl">{recomandedCalories}<span className="text-xl"> kcal</span></p>
          <div>
            <p>Foods you should no eat</p>
            <div>lista produse interzise</div>
          </div>
          <button onClick={closeDialog}>close</button>
          <button onClick={closeDialog}>start loosing weight</button>
        </div>
      </dialog>
    ) : null;

  return dialog;
};

export default Modal;
