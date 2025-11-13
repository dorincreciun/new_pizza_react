import { useEffect, useState } from "react"

import { SECTION_IDS, type SectionId } from "@widgets/sidebar-menu/model/constants"

export const useSidebarScroll = () => {
	const [activeSection, setActiveSection] = useState<SectionId>("services")

	const scrollToSection = (sectionId: SectionId) => {
		const el = document.getElementById(sectionId)

		if (!el) {
			console.warn(`Section "${sectionId}" not found`)
			return
		}

		el.scrollIntoView({
			behavior: "smooth",
			block: "start",
		})

		setActiveSection(sectionId)
	}

	useEffect(() => {
		const handleScroll = () => {
			const referenceY = window.innerHeight / 3

			let currentId: SectionId | null = null

			for (const id of SECTION_IDS) {
				const el = document.getElementById(id)
				if (!el) continue

				const rect = el.getBoundingClientRect()

				if (rect.top <= referenceY && rect.bottom >= referenceY) {
					currentId = id
					break
				}
			}

			if (currentId) {
				setActiveSection((prev) => (prev === currentId ? prev : currentId))
			}
		}

		handleScroll()
		window.addEventListener("scroll", handleScroll, { passive: true })

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const isActive = (id: SectionId) => activeSection === id

	return {
		activeSection,
		isActive,
		scrollToSection,
	}
}
