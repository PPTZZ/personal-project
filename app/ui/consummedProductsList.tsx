"use client";
import { useEffect } from "react";
import ConsumedProduct from "./consumedProduct";
import { fetchData } from "../lib/services";
import { useDispatch } from "react-redux";
import { setDiaryEntries } from "../lib/features/user/userSlice";

const ConsummedProductsList = ({ userId }: { userId: string }) => {
  return (
    <div>
      {}
    </div>
  );
};

export default ConsummedProductsList;
