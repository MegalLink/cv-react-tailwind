import { create } from 'zustand'

export const useThemeStore = create(set => ({
  darkMode: false,
  changeMode: () =>
    set(state => {
      const newMode = !state.darkMode
      if (newMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return { darkMode: newMode }
    }),
}))
