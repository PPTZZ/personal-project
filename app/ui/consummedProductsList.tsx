"use client";
import { formattedDate } from "../lib/services";
import ConsumedProduct from "./consumedProduct";

const ConsummedProductsList = () => {

  const defaultDate = formattedDate();
  return (
    <div className="lg:w-4/5 mt-16 h-60 overflow-scroll relative">
      {/* {entryList.map((entry) => (
        <ConsumedProduct
          key={entry._id}
          productName={entry.productName}
          grams={entry.grams}
          cals={entry.kcal}
          id={entry._id}
        />
      ))} */}
    </div>
  );
};

export default ConsummedProductsList;
