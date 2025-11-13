import enCommon from "@shared/locales/en/translation.json"
import roCommon from "@shared/locales/ro/translation.json"
import ruCommon from "@shared/locales/ru/translation.json"

export const resources = {
	ro: { translation: roCommon },
	en: { translation: enCommon },
	ru: { translation: ruCommon },
} as const

export const languageLabels = {
	en: "English",
	ro: "Română",
	ru: "Русский",
} as const

export type TLanguage = keyof typeof resources
