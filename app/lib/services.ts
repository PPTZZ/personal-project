import bcryptjs from "bcryptjs";
import axios from "axios";
import { SessionOptions } from "iron-session";
import { TSessionData } from "./definitions";

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

export const formattedDate = (): string => {
  const dateToday = new Date();
  const year = dateToday.getFullYear();
  const month = String(dateToday.getMonth() + 1).padStart(2, "0");
  const day = String(dateToday.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export const fetchData = async (id: string = "0") => {
  try {
    const result = await axios.get(`http://localhost:3000/${id}/user-entries`);
    return result;
  } catch (err) {
    return err;
  }
};

export const defaultSession: TSessionData = {
  isLoggedIn: false,
  session: "",
};

export const sessionOptions: SessionOptions = {
  password: process.env.AUTH_SECRET || "default_secret",
  cookieName: "slim-mom-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};

export const axiosPost = async (
  url: string,
  email: FormDataEntryValue,
  password: FormDataEntryValue
) => {
  try {
    const response = await axios.post(`http://localhost:3000/${url}`, {
      email,
      password,
    });
    const user = response.data;
    const { status } = response;
    return { status, user };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { error: error.response.data?.message || "Invalid credentials" };
      }
      return { error: "No response from server. Please try again." };
    }
  }
};



export const fetchProducts = async (bloodType)=>{
try {
  const response = await axios.get(`http://localhost:3000/products?bloodType=${bloodType}`)
  return response.data
} catch (error) {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
}
}