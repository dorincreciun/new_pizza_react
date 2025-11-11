import type { ReactNode } from "react"

import type { VariantProps } from "class-variance-authority"

import type { variantsTitle } from "@shared/components/Title/model/styles"

type TitleType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type SizeType = VariantProps<typeof variantsTitle>["size"]

export interface ITitleProps {
	as: TitleType
	size?: SizeType
	className?: string
	children: ReactNode
}
