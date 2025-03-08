import { createAsyncThunk } from "@reduxjs/toolkit";
import bcryptjs from "bcryptjs";
import axios from "axios";

export const hashPassword = (password: string): string => {
  const slat = bcryptjs.genSaltSync(10);
  return bcryptjs.hashSync(password, slat);
};

export const verifyPassword = (
  enteredPassword: string,
  userPassword: string
): boolean => {
  return bcryptjs.compareSync(enteredPassword, userPassword);
};

export const calorieCalculator = (
  height: number,
  age: number,
  currentWeight: number,
  desiredWeight: number
): number => {
  return (
    10 * currentWeight +
    6.25 * height -
    5 * age -
    161 -
    10 * (currentWeight - desiredWeight)
  );
};

export const getLimitedProducts = createAsyncThunk(
  "products/getLimitedProducts",
  async (_bloodType: number, thunkAPI): Promise<any> => {
    try {
      const response = await axios.get(
        `http://localhost:3000/products?bloodType=${_bloodType}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      throw error;
    }
  }
);
