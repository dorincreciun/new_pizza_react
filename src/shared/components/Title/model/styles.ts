import { cva } from "class-variance-authority"

export const variantsTitle = cva(`font-bold leading-[1.23] text-black`, {
	variants: {
		size: {
			xs: "text-lg font-medium",
			sm: "text-2xl font-semibold",
			md: "text-[2rem] font-bold",
			lg: "text-5xl font-bold",
		},
	},
	defaultVariants: {
		size: "xs",
	},
})
