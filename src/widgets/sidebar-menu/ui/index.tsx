import { BriefcaseBusiness, FileCode, GalleryVerticalEnd, GraduationCap, House, Mail, UserStar } from "lucide-react"

import { LanguageSwitcher } from "@features/change-language"

import { Button } from "@shared/components/Button"
import { Tooltip } from "@shared/components/Tooltip"

export const SidebarMenu = () => {
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
						color={"secondary"}
						aria-label={"Go to home section"}
						isOnlyIcon
					>
						<House />
					</Button>
				</Tooltip>

				<Tooltip
					placement={"top"}
					title={"Services"}
				>
					<Button
						color={"secondary"}
						aria-label={"View services section"}
						isOnlyIcon
					>
						<FileCode />
					</Button>
				</Tooltip>

				<Tooltip
					placement={"top"}
					title={"Education"}
				>
					<Button
						color={"secondary"}
						aria-label={"View education section"}
						isOnlyIcon
					>
						<GraduationCap />
					</Button>
				</Tooltip>

				<Tooltip
					placement={"top"}
					title={"Tips"}
				>
					<Button
						color={"secondary"}
						aria-label={"View tips and recommendations"}
						isOnlyIcon
					>
						<UserStar />
					</Button>
				</Tooltip>

				<Tooltip
					placement={"top"}
					title={"Work history"}
				>
					<Button
						color={"secondary"}
						aria-label={"View work history"}
						isOnlyIcon
					>
						<BriefcaseBusiness />
					</Button>
				</Tooltip>

				<Tooltip
					placement={"top"}
					title={"Portfolio"}
				>
					<Button
						color={"secondary"}
						aria-label={"View portfolio"}
						isOnlyIcon
					>
						<GalleryVerticalEnd />
					</Button>
				</Tooltip>

				<Tooltip
					placement={"top"}
					title={"Contact"}
				>
					<Button
						color={"secondary"}
						aria-label={"View contact information"}
						isOnlyIcon
					>
						<Mail />
					</Button>
				</Tooltip>
			</div>
		</div>
	)
}
