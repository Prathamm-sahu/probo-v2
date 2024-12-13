import { create } from "zustand";

interface UserStoreType {
  availableBalance: number
  lockedBalance: number
  setAvailableBalance: (value: number) => void
  setLockedBalance: (value: number) => void
}

export const userStore = create<UserStoreType>((set) => ({
  availableBalance: 15,
  lockedBalance: 0,

  setAvailableBalance: (value) => set((state) => ({ availableBalance: state.availableBalance + value})),
  setLockedBalance: (value) => set((state) => ({ lockedBalance: state.lockedBalance + value}))
}))