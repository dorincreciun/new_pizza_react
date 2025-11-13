import type { ReactNode } from "react"

export type TTooltipPlacement = "top" | "right" | "bottom" | "left"

export interface ITooltipProps {
	placement: TTooltipPlacement
	arrow?: boolean
	children: ReactNode
	title: string
	maxWidth?: number
}
