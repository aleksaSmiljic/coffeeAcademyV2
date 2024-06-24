import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .nonempty("Name is required")
      .min(4, "Name must contain at least 4 characters!"),
    email: z.string().nonempty("Email is required").email(),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters!"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
