import { createElement } from "react"

import type { ITitleProps } from "@shared/components/Title/model/interface"
import { variantsTitle } from "@shared/components/Title/model/styles"
import { cn } from "@shared/utils/cn"

export const Title = ({ as, children, size, className }: ITitleProps) => {
	const buildTitleStyle = cn(variantsTitle({ size }), className)

	return createElement(as, { children, className: buildTitleStyle })
}
