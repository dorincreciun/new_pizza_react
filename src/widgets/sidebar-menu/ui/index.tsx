import { BriefcaseBusiness, FileCode, GalleryVerticalEnd, GraduationCap, House, Mail, UserStar } from "lucide-react"

import { useSidebarScroll } from "@widgets/sidebar-menu/model/useSidebarScroll"

import { LanguageSwitcher } from "@features/change-language"

import { Button } from "@shared/components/Button"
import { Tooltip } from "@shared/components/Tooltip"

export const SidebarMenu = () => {
	const { isActive, scrollToSection } = useSidebarScroll()

	return (
		<div className={"sticky top-0 z-10 flex h-screen w-[100px] items-center justify-center bg-white"}>
			<div className={"absolute top-7 left-1/2 -translate-x-1/2"}>
				<LanguageSwitcher />
			</div>

			<div className={"flex flex-col gap-y-9"}>
				<Tooltip
					placement={"top"}
					title={"Home"}
				>
					<Button
						color={isActive("home") ? "primary" : "secondary"}
						aria-label={"Go to services section"}
						isOnlyIcon
						onClick={() => scrollToSection("home")}
					>
						<House />
					</Button>
				</Tooltip>

				<Tooltip
					placement={"top"}
					title={"Services"}
				>
					<Button
						color={isActive("services") ? "primary" : "secondary"}
						aria-label={"View services section"}
						isOnlyIcon
						onClick={() => scrollToSection("services")}
					>
						<FileCode />
					</Button>
				</Tooltip>

				<Tooltip
					placement={"top"}
					title={"Tips"}
				>
					<Button
						color={isActive("recommendations") ? "primary" : "secondary"}
						aria-label={"View tips and recommendations"}
						isOnlyIcon
						onClick={() => scrollToSection("recommendations")}
					>
						<UserStar />
					</Button>
				</Tooltip>

				<Tooltip
					placement={"top"}
					title={"Education"}
				>
					<Button
						color={isActive("education") ? "primary" : "secondary"}
						aria-label={"View education section"}
						isOnlyIcon
						onClick={() => scrollToSection("education")}
					>
						<GraduationCap />
					</Button>
				</Tooltip>

				<Tooltip
					placement={"top"}
					title={"Work history"}
				>
					<Button
						color={isActive("work-history") ? "primary" : "secondary"}
						aria-label={"View work history"}
						isOnlyIcon
						onClick={() => scrollToSection("work-history")}
					>
						<BriefcaseBusiness />
					</Button>
				</Tooltip>

				<Tooltip
					placement={"top"}
					title={"Portfolio"}
				>
					<Button
						color={isActive("portfolio") ? "primary" : "secondary"}
						aria-label={"View portfolio"}
						isOnlyIcon
						onClick={() => scrollToSection("portfolio")}
					>
						<GalleryVerticalEnd />
					</Button>
				</Tooltip>

				<Tooltip
					placement={"top"}
					title={"Contact"}
				>
					<Button
						color={isActive("contact") ? "primary" : "secondary"}
						aria-label={"View contact information"}
						isOnlyIcon
						onClick={() => scrollToSection("contact")}
					>
						<Mail />
					</Button>
				</Tooltip>
			</div>
		</div>
	)
}
