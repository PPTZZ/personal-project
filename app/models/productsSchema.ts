import { Schema, model } from "mongoose";
import { TProducts } from "../lib/definitions";

const productSchema: Schema<TProducts> = new Schema({
  categories: {
    type: String,
  },
  weight: {
    type: Number,
  },
  title: {
    type: String,
  },
  calories: {
    type: Number,
  },
  groupBloodNotAllowed: {
    type: [{}],
  },
});

const Product = model("Product", productSchema);

export default Product;
