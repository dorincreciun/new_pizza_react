import { useTranslation } from "react-i18next"

import type { TLanguage } from "@shared/config/i18n"

export const useLanguage = () => {
	const { i18n } = useTranslation()

	const setLanguage = (lang: TLanguage) => i18n.changeLanguage(lang)
	const current = i18n.language as TLanguage
	const supportedLanguages = Object.keys(i18n.options.resources || {}) as TLanguage[]

	return { current, setLanguage, supportedLanguages }
}
