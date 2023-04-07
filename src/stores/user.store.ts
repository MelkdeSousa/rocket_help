import { create } from 'zustand'

export type UserStore = {
  isAuthenticated: boolean
  user?: object
  loadingUser: boolean
  setUser: (user: object) => void
  setLoadingUser: (value: boolean) => void
  removeUser: () => void
}

const useUserStore = create<UserStore>((set) => ({
  isAuthenticated: false,
  user: undefined,
  loadingUser: true,
  setUser: (user: object) =>
    set((state) => ({
      ...state,
      user,
      isAuthenticated: !!Object.keys(user).length,
    })),
  setLoadingUser: (value) => set((state) => ({ ...state, loadingUser: value })),
  removeUser: () =>
    set((state) => ({ ...state, user: undefined, isAuthenticated: false })),
}))

export default useUserStore
