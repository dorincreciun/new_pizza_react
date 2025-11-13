import type { ReactNode } from "react"

export interface ISectionInfoProps {
	id: string
	title: string
	description: string
	render?: () => ReactNode
}
