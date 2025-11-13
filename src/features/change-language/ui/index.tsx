import { useState } from "react"

import { useLanguage } from "@features/change-language/model/useLanguage"
import { renderLanguageIcon } from "@features/change-language/utils/render-icon"

import { Tooltip } from "@shared/components/Tooltip"
import { languageLabels } from "@shared/const/react-i18next"
import { cn } from "@shared/utils/cn"

export const LanguageSwitcher = () => {
	const { current, setLanguage, supportedLanguages } = useLanguage()
	const [open, setOpen] = useState<boolean>(false)

	return (
		<div className="relative">
			<Tooltip
				placement="left"
				title="Change language"
			>
				<button
					onClick={() => setOpen((prev) => !prev)}
					className={cn("size-7.5 max-w-max cursor-pointer overflow-hidden rounded-full active:opacity-70")}
				>
					{renderLanguageIcon(current)}
				</button>
			</Tooltip>

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
				{supportedLanguages.map((lang) => (
					<Tooltip
						key={lang}
						placement="left"
						title={languageLabels[lang]}
					>
						<button
							onClick={() => {
								void setLanguage(lang)
								setOpen(false)
							}}
							className={cn("size-7.5 cursor-pointer overflow-hidden rounded-full active:opacity-70")}
						>
							{renderLanguageIcon(lang)}
						</button>
					</Tooltip>
				))}
			</div>
		</div>
	)
}
