export const SECTION_IDS = ["services", "recommendations", "education", "work-history", "portfolio", "contact"] as const

export type SectionId = (typeof SECTION_IDS)[number]
