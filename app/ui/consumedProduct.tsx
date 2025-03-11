import React from "react";

const ConsumedProduct = ({
  productName,
  grams,
  cals,
}: {
  productName: string;
  grams: number;
  cals: number;
}) => {
  return (
    <div className="flex">
      <p>{productName}</p>
      <p>{grams}</p>
      <p>{cals}</p>
      <p>X</p>
    </div>
  );
};

export default ConsumedProduct;
