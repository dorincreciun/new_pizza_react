import { cva } from "class-variance-authority"

export const tooltipVariants = cva(
	[
		"pointer-events-none",
		"absolute z-50",
		"rounded-md bg-black text-white",
		"px-2 py-1 text-xs",
		"shadow-lg",
		"opacity-0 scale-95",
		"transform transition-all duration-150",
		"group-hover:opacity-100 group-hover:scale-100",
		"whitespace-nowrap", // Adăugat pentru a preveni împărțirea textului
	],
	{
		variants: {
			placement: {
				top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
				right: "left-full top-1/2 -translate-y-1/2 ml-2",
				bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
				left: "right-full top-1/2 -translate-y-1/2 mr-2",
			},
		},
		defaultVariants: {
			placement: "top",
		},
	},
)

export const arrowVariants = cva("absolute h-3 w-3 rotate-45 bg-black", {
	variants: {
		placement: {
			top: "bottom-[-3px] left-1/2 -translate-x-1/2",
			right: "left-[-3px] top-1/2 -translate-y-1/2",
			bottom: "top-[-3px] left-1/2 -translate-x-1/2",
			left: "right-[-3px] top-1/2 -translate-y-1/2",
		},
	},
	defaultVariants: {
		placement: "top",
	},
})
