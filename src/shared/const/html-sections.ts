export const SECTION_IDS = [
	"home",
	"services",
	"recommendations",
	"education",
	"work-history",
	"portfolio",
	"contact",
] as const

export type SectionId = (typeof SECTION_IDS)[number]
