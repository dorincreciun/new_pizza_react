import type { FC } from "react"

import type { ITooltipProps, TTooltipPlacement } from "@shared/components/Tooltip/model/interface"
import { arrowVariants, tooltipVariants } from "@shared/components/Tooltip/model/variants"
import { cn } from "@shared/utils/cn"

export const Tooltip: FC<ITooltipProps> = ({ children, placement, arrow = true, title, maxWidth = "auto" }) => {
	return (
		<div className="group relative inline-flex">
			{children}

			<div
				className={cn(tooltipVariants({ placement: placement as TTooltipPlacement }))}
				style={maxWidth ? { maxWidth } : undefined}
			>
				<span className={"relative z-10"}>{title}</span>

				{arrow && <span className={cn(arrowVariants({ placement: placement as TTooltipPlacement }))} />}
			</div>
		</div>
	)
}
