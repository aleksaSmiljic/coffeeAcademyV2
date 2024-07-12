import { create } from "zustand";

export const useLoginStore = create((set, get) => ({
  isLogin: false,
  admin: false,
  login: (email, password) => {
    set({
      isLogin: true,
      admin: email?.includes("@coffee.com") ? true : false,
    });
    localStorage.setItem(
      `${email?.includes("@coffee.com") ? "admin" : "user"}`,
      JSON.stringify({
        email,
        password,
        admin: get().admin,
        isLogin: get().isLogin,
      })
    );
  },
  logout: (email, password) => {
    set({
      isLogin: false,
      admin: email?.includes("@coffee.com") ? true : false,
    });
    localStorage.setItem(
      `${email?.includes("@coffee.com") ? "admin" : "user"}`,
      JSON.stringify({
        email,
        password,
        admin: get().admin,
        isLogin: get().isLogin,
      })
    );
  },
}));
