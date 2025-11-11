import i18next, { type InitOptions } from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import enCommon from "../locales/en/common.json"
import roCommon from "../locales/ro/common.json"

const options: InitOptions = {
	resources: {
		ro: { common: roCommon },
		en: { common: enCommon },
	},

	fallbackLng: "en",

	ns: ["common"],
	defaultNS: "common",

	interpolation: {
		escapeValue: false,
	},

	detection: {
		order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
		caches: ["localStorage"],
		lookupFromPathIndex: 0,
	},
}

export const i18n = i18next.createInstance()

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init(options)
	.catch((error) => {
		console.error("Eroare la inițializarea i18next:", error)
	})

i18n.on("languageChanged", (lng) => {
	document.documentElement.lang = lng
})
