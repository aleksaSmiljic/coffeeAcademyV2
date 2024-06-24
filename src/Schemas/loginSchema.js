import { z } from "zod";

const localStorageUserData = JSON.parse(localStorage.getItem("user"));
const localStorageAdminData = JSON.parse(localStorage.getItem("admin"));

export const loginSchema = z
  .object({
    email: z.string().nonempty("Email is required").email(),
    password: z.string().nonempty("Password is required"),
  })
  .refine(
    (data) =>
      (data.email !== localStorageUserData?.email ||
        data.email !== localStorageAdminData?.email,
      {
        message: "Email does not exist",
        path: ["email"],
      }) ||
      (data.password !== localStorageAdminData?.password ||
        data.password !== localStorageUserData?.password,
      {
        message: "Incorrect password",
        path: ["password"],
      })
  );
