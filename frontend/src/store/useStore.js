import { create } from 'zustand'

export const useStore = create((set) => ({
  language: 'ta', // default to Tamil
  toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'ta' : 'en' })),
  setLanguage: (lang) => set({ language: lang }),
}))
