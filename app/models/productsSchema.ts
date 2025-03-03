import { model, Schema } from "mongoose";
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
    type: [Boolean],
  },
});

const Product = model("product", productSchema);

export default Product;
