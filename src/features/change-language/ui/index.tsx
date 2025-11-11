import { useState } from "react"

import { useLanguage } from "@features/change-language/model/useLanguage"
import { renderLanguageIcon } from "@features/change-language/utils/render-icon"

import { cn } from "@shared/utils/cn"

export const LanguageSwitcher = () => {
	const { current, setLanguage, supportedLanguages } = useLanguage()
	const [open, setOpen] = useState<boolean>(false)

	return (
		<div className={"relative"}>
			<button
				onClick={() => setOpen((prev) => !prev)}
				className={cn(["size-7.5 max-w-max overflow-hidden rounded-full"])}
			>
				{renderLanguageIcon(current)}
			</button>
			<div
				className={cn(
					"absolute z-10 mt-4",
					"origin-top transition-all duration-200",
					"flex flex-col gap-2",
					open ?
						"translate-y-0 scale-100 opacity-100"
					:	"pointer-events-none -translate-y-2 scale-95 opacity-0",
				)}
			>
				{supportedLanguages.map((lang) => {
					return (
						<button
							onClick={() => setLanguage(lang)}
							className={cn(["size-7.5 overflow-hidden rounded-full"])}
						>
							{renderLanguageIcon(lang)}
						</button>
					)
				})}
			</div>
		</div>
	)
}
