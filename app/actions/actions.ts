"use server";
import axios from "axios";
import {
  axiosPost,
  createEntry,
  defaultSession,
  sessionOptions,
} from "../lib/services";
import { TSessionData } from "../lib/definitions";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getSession = async () => {
  const sessionCookies = await cookies();
  const session = await getIronSession<TSessionData>(
    sessionCookies,
    sessionOptions
  );
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
};
export const registerUser = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password") as string;

  if (!password) {
    throw new Error("Password is required");
  }
  try {
    const response = await axios.post("http://localhost:3000/users/register", {
      name,
      email,
      password,
    });
    return response.status;
  } catch (error) {
    console.error("Registration failed:", error);
    throw new Error(String(error));
  }
};

export const loginUser = async (
  prevState: { error: undefined | string },
  formData: FormData
): Promise<any> => {
  const session = await getSession();
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  const response = await axiosPost("users/login", email, password);
  if (response?.status === 200) {
    session.userId = response.user._id;
    session.userName = response.user.name;
    session.userEmail = response.user.email;
    session.isLoggedIn = true;
    await session.save();
    redirect("/user/calculator");
  } else {
    return { error: response?.error };
  }
};

export const calculateUserKcal = async (
  prevState: { error: undefined | string },
  formData: FormData
): Promise<any> => {
  const height = formData.get("height");
  const age = formData.get("age");
  const currentWeight = formData.get("currentWeight");
  const desiredWeight = formData.get("desiredWeight");
  const bloodType = formData.get("bloodType");
  console.log({ height, age, currentWeight, desiredWeight, bloodType });
};

export const addNewEntry = async (
  formData: FormData
): Promise<any> => {
  const session = await getSession()
  const productName = formData.get("productName");
  const grams = formData.get("grams");
  const entryDate = formData.get("entryDate");
  const owner = session.userId

  if (!productName || !grams || !entryDate) {
    throw new Error("All fields are required");
  }

  await createEntry(productName, grams, entryDate,owner);
};

export const logoutUser = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};
