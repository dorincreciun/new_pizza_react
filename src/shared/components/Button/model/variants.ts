import { cva } from "class-variance-authority"

export const buttonVariants = cva(
	[
		"inline-flex items-center justify-center select-none align-middle",
		"font-medium cursor-pointer relative overflow-hidden",
		"transition-all duration-200 ease-out motion-reduce:transition-none",
		"active:translate-y-[1px] active:shadow-inner",
		"outline-none focus-visible:ring-2 focus-visible:ring-yellow/40 focus-visible:ring-offset-2",
		"shadow-sm hover:shadow-md focus:shadow-md active:shadow-sm disabled:shadow-none",
		"before:absolute before:inset-y-0 before:left-[-30%] before:w-1/3 before:rounded-full",
		"before:bg-white/10 before:skew-x-[-20deg] before:opacity-0 before:translate-x-[-120%]",
		"hover:before:opacity-100 hover:before:translate-x-[220%] before:transition before:duration-500 before:ease-out",
		"data-[loading=true]:before:opacity-0",
		"disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0",
		"data-[loading=true]:pointer-events-none data-[loading=true]:opacity-70 data-[loading=true]:animate-pulse",
		"aria-busy:pointer-events-none aria-busy:opacity-70",
		"aria-busy:cursor-wait",
	],
	{
		variants: {
			kind: {
				solid: "",
				outlined: "border",
			},
			color: {
				primary: "bg-yellow text-black hover:bg-yellow/90",
				secondary: "bg-bg-1 text-black hover:bg-yellow",
			},
			size: {
				small: "h-10 text-sm leading-5 rounded-lg",
				medium: "h-11 text-base leading-6 rounded-xl",
				large: "h-12.5 text-lg leading-7 rounded-2xl",
			},

			isOnlyIcon: {
				true: "px-0 aspect-square rounded-full",
				false: "",
			},
		},

		compoundVariants: [
			{ size: "small", isOnlyIcon: false, class: "gap-2" },
			{ size: "medium", isOnlyIcon: false, class: "gap-2.5" },
			{ size: "large", isOnlyIcon: false, class: "gap-3" },

			{ size: "small", isOnlyIcon: false, class: "px-3" },
			{ size: "medium", isOnlyIcon: false, class: "px-3.5" },
			{ size: "large", isOnlyIcon: false, class: "px-4" },

			{
				kind: "outlined",
				color: "primary",
				class: "bg-transparent border-yellow text-yellow hover:bg-bg-1",
			},
			{
				kind: "outlined",
				color: "secondary",
				class: "bg-white border-neutral text-muted hover:bg-neutral",
			},
		],

		defaultVariants: {
			kind: "solid",
			color: "primary",
			size: "small",
			isOnlyIcon: false,
		},
	},
)
