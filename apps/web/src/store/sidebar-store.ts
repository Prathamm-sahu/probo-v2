import { create } from "zustand"

interface SidebarStoreType {
  open: boolean
  setOpen: (value: boolean) => void
}

export const useSidebarStore = create<SidebarStoreType>((set) => ({
  open: false,
  setOpen: (value) => set({ open: value })
}))