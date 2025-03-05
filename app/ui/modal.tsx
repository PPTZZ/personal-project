"use client";
import React, { JSX } from "react";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import { TModalProps } from "../lib/definitions";

const Modal: React.FC<TModalProps> = () => {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("showDialog");
  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
      // use .show() to show dialog
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    onclose();
  };

  const clickOk = () => {
    onkeydown();
    closeDialog();
  };

  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog ref={dialogRef} className="backdrop:bg-neutral-700/50">
        <div>
          <h2>title</h2>
          <div>calorii</div>
          <div>
            produse interzise
            <div>lista produse interzise</div>
          </div>
          <button onClick={closeDialog}>close</button>
          <button onClick={clickOk}>start loosing weight</button>
        </div>
      </dialog>
    ) : null;

  return dialog;
};

export default Modal;
