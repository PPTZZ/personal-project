import { models, model, Schema } from "mongoose";

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

const Product = models.Product || model("Product", productSchema);

export default Product;