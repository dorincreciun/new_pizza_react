import type { FC } from "react"

import type { ISubtitleProps } from "@shared/components/Subtitle/model/interface"
import { cn } from "@shared/utils/cn"

export const Subtitle: FC<ISubtitleProps> = ({ children, className }) => {
	return <p className={cn("text-paragraph leading-6", className)}>{children}</p>
}
