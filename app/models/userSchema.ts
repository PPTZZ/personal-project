import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userData: {
    bannedProducts: [],
    recomandedKcal: { type: Number },
    age: { type: Number },
    height: { type: Number },
    weight: { type: Number },
    desiredWeight: { type: Number },
  },
});

const User = models.User || model("User", userSchema);

export default User;
