"use client";
import React, { JSX } from "react";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import { TModalProps } from "../lib/definitions";
import { useRouter } from "next/navigation";
import close from "@/public/close.svg";
import Image from "next/image";
import axios from "axios";
import {  useSelector } from "react-redux";
import { useAppDispatch, useAppSelector, useAppStore } from "../lib/hooks";
import { RootState } from "../lib/redux/store";
import { addBannedProducts } from "../actions/actions";

const Modal: React.FC<TModalProps> = ({ userId }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("showDialog");
  const recomandedCalories = searchParams.get("recomandedCalories");
  const bloodType = searchParams.get("bloodType");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
    dispatch(addBannedProducts(bloodType))
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    router.replace("/user/calculator");
  };
  const looseWeight = async () => {
    const response = await axios.patch(
      `http://localhost:3000/users/user-data`,
      {
        recomandedKcal: recomandedCalories,
        id: userId,
      }
    );
    router.replace("/user/calculator");
  };
  const bannedProductsList = useSelector(
    (state: RootState) => state.user.bannedProducts
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
              {bannedProductsList?.length ? (
                bannedProductsList.map((product: string, index: number) => (
                  <p key={index} className="text-neutral-500">
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
          <button onClick={looseWeight} className="btn-calculator">
            Start loosing weight
          </button>
        </div>
      </dialog>
    ) : null;

  return dialog;
};

export default Modal;

function initializeProducts(products: any): any {
  return {
    type: "INITIALIZE_PRODUCTS",
    payload: products,
  };
}
