import { useStore } from '../store/useStore'
import en from './en.json'
import ta from './ta.json'

const translations = {
  en,
  ta
}

export const useTranslation = () => {
  const language = useStore((state) => state.language)

  const t = (key) => {
    return translations[language][key] || key
  }

  return { t, language }
}
