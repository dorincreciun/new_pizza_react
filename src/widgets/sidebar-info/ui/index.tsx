import { Download, SquaresExclude } from "lucide-react"
import { useTranslation } from "react-i18next"

import { ProfileSkills } from "@widgets/profile-skills"

import { Avatar } from "@shared/components/Avatar"
import { Button } from "@shared/components/Button"
import { InfoLabel } from "@shared/components/InfoLabel"
import { Subtitle } from "@shared/components/Subtitle"
import { Title } from "@shared/components/Title"
import { Tooltip } from "@shared/components/Tooltip"

export const SidebarInfo = () => {
	const { t } = useTranslation("translation")
	return (
		<div className={"sticky top-0 bottom-0 z-10 max-h-max min-h-screen w-[300px] bg-white p-10"}>
			<Avatar />
			{/* User name */}
			<div className={"mt-5"}>
				<Title
					as={"h2"}
					size={"xs"}
					className={"mb-1 text-center"}
				>
					{t("SIDEBAR_INFO.NAME")}
				</Title>
				<Subtitle className={"text-center"}>{t("SIDEBAR_INFO.POSITION")}</Subtitle>
			</div>
			<div className={"flex flex-col gap-y-6 divide-y divide-gray-200 py-6"}>
				{/* User info */}
				<ul className="flex flex-col gap-3 pb-6">
					<li className="flex items-center justify-between">
						<InfoLabel>Age:</InfoLabel>
						<span className="font-normal text-black">24</span>
					</li>
					<li className="flex items-center justify-between">
						<InfoLabel>Residence:</InfoLabel>
						<span className="font-normal text-black">MD</span>
					</li>
					<li className="flex items-center justify-between">
						<InfoLabel>Freelance:</InfoLabel>
						<span className="font-normal text-black">Available</span>
					</li>
					<li className="flex items-center justify-between">
						<InfoLabel>Address</InfoLabel>
						<span className="font-normal text-black">Dhaka,Bangladesh</span>
					</li>
				</ul>
				{/* Languages */}
				<ProfileSkills
					title={"Languages"}
					className={"pb-6"}
					skills={[
						{ name: "English", value: 20 },
						{ name: "Romana", value: 100 },
						{ name: "Russian", value: 80 },
					]}
				/>
				{/* Skills */}
				<ProfileSkills
					title={"Skills"}
					className={"pb-6"}
					skills={[
						{ name: "Html", value: 90 },
						{ name: "CSS", value: 85 },
						{ name: "Js", value: 80 },
						{ name: "React", value: 70 },
					]}
				/>
				{/* Other Skills */}
				<ul className={"pb-6"}>
					<li>
						<SquaresExclude className={"text-yellow mr-2 inline-block"} />
						<span className="text-paragraph leading-6">Bootstrap, Materialize</span>
					</li>
					<li>
						<SquaresExclude className={"text-yellow mr-2 inline-block"} />
						<span className="text-paragraph leading-6">Stylus, Sass, Less</span>
					</li>
					<li>
						<SquaresExclude className={"text-yellow mr-2 inline-block"} />
						<span className="text-paragraph leading-6">Gulp, Webpack, Grunt</span>
					</li>
					<li>
						<SquaresExclude className={"text-yellow mr-2 inline-block"} />
						<span className="text-paragraph leading-6">GIT Knowledge</span>
					</li>
				</ul>

				{/* Button download cv */}
				<Tooltip
					placement={"top"}
					title={"Download 'Resume'"}
				>
					<Button className={"w-full"}>
						Resume <Download />
					</Button>
				</Tooltip>
			</div>
		</div>
	)
}
