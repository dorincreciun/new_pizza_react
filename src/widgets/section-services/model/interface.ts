import type { ReactNode } from "react"

export interface ISectionInfoProps {
	title: string
	description: string
	render?: () => ReactNode
}
