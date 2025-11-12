import { useTranslation } from "react-i18next"

import { ProfileSkills } from "@widgets/profile-skills"

import { Avatar } from "@shared/components/Avatar"
import { Subtitle } from "@shared/components/Subtitle"
import { Title } from "@shared/components/Title"

export const SidebarInfo = () => {
	const { t } = useTranslation("translation")
	return (
		<div className={"w-[300px] bg-white p-10"}>
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
			<div className={"mt-6 flex flex-col gap-y-6 divide-y divide-gray-200"}>
				{/* User info */}
				<ul className="flex flex-col gap-3 pb-6">
					<li className="flex items-center justify-between">
						<span className="bg-yellow max-w-max px-2 py-1 leading-4 text-black">Age:</span>
						<span className="font-normal text-black">24</span>
					</li>
					<li className="flex items-center justify-between">
						<span className="bg-yellow max-w-max px-2 py-1 leading-4 text-black">Residence:</span>
						<span className="font-normal text-black">MD</span>
					</li>
					<li className="flex items-center justify-between">
						<span className="bg-yellow max-w-max px-2 py-1 leading-4 text-black">Freelance:</span>
						<span className="font-normal text-black">Available</span>
					</li>
					<li className="flex items-center justify-between">
						<span className="bg-yellow max-w-max px-2 py-1 leading-4 text-black">Address:</span>
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
			</div>
		</div>
	)
}
