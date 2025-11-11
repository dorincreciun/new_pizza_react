import { lazy } from "react"

const IconEN = lazy(() => import("@features/change-language/ui/IconEN"))
const IconRO = lazy(() => import("@features/change-language/ui/IconRO"))
const IconRU = lazy(() => import("@features/change-language/ui/IconRU"))

export const renderLanguageIcon = (lang: string) => {
	switch (lang) {
		case "en":
			return <IconEN />
		case "ro":
			return <IconRO />
		case "ru":
			return <IconRU />
		default:
			return null
	}
}
