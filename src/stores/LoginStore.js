import { create } from "zustand";

export const useLoginStore = create((set) => ({
  isLogin: false,
  isAdmin: false,
  login: () => set({ isLogin: true }),
  logout: () => set({ isLogin: false, isAdmin: false }),
  setIsAdminTrue: () => set({ isAdmin: true }),
}));
