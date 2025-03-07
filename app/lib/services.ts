import { createAsyncThunk } from "@reduxjs/toolkit";
import bcryptjs from "bcryptjs";
import axios from "axios";

export const hashPassword = (password: string): string => {
  return bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
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

export const getProducts = async (bloodType:number)=>{
const response = await axios.get(`http://localhost:3000/products?${bloodType}`);
console.log(response.data);

}