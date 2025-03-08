"use server";
import axios from "axios";
import { hashPassword } from "@/app/lib/services";

export const registerUser = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password") as string;

  if (!password) {
    throw new Error("Password is required");
  }

  const hashedPass = hashPassword(password);

  try {
    await axios.post("http://localhost:3000/users/register", {
      name,
      email,
      password: hashedPass,
    });
  } catch (error) {
    console.error("Registration failed:", error);
    throw new Error("Registration failed. Please try again.");
  }
};

export const loginUser = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  try {
    const response = await axios.post("http://localhost:3000/users/login", {
      email,
      password,
    });
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error("Login failed. Please try again.");
  }
};
