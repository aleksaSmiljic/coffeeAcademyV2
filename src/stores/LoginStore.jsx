import { create } from "zustand";

export const useLoginStore = create((set) => ({
  login: false,
  isAdmin: false,
  setLogin: () => set({ login: true }),
  setLogout: () => set({ login: false, isAdmin: false }),
  setIsAdminTrue: () => set({ isAdmin: true }),
}));
